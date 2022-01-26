import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/userActions";
import "./register.scss";

export default function Register() {
  const initialState = {
    name: "",
    phone: "",
    account: "",
    password: "",
    DoB: "",
    cf_password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { name, phone, account, password, cf_password, DoB } = userData;

  const userRegister = useSelector((state) => state.userRegister);
  const { success } = userRegister;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === cf_password) {
      if (
        name !== null &&
        phone !== null &&
        account !== null &&
        password !== null &&
        DoB !== null
      ) {
        dispatch(register({ name, phone, account, password, DoB }));
      }
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/login", { replace: true });
    }
  }, [navigate, success]);

  return (
    <div className="account-form">
      <div className="text-center mb-3">
        <span className="">
          <Link to="/">
            <img src="https://id.unica.vn/images/logo.png" alt="logo" />
          </Link>
        </span>
      </div>

      <form className="wrap-form" onSubmit={handleSubmit}>
        <h3>Đăng Ký Tài Khoản</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Họ và tên"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Nhập email"
            name="account"
            value={account}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập số điện thoại"
            name="phone"
            value={phone}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Nhập ngày sinh"
            name="DoB"
            value={DoB}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Nhập mật khẩu"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Nhập lại mật khẩu"
            name="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          />
        </div>

        <div className="mb-3 pt-4">
          <button className="btn-account-submit" type="submit">
            Đăng ký
          </button>
        </div>
        <div className="text center">
          <span>Bạn có tài khoản?</span>
          <Link to="/login">Đăng nhập</Link>
          <br />
        </div>
      </form>
    </div>
  );
}
