import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../redux/actions/userActions";
import "./login.scss";

export default function Login(props) {
  const initialState = {
    account: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { account, password } = userData;

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(account, password));
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
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
        <h3>Đăng nhập</h3>
        <div className="mb-4">
          <input
            type="email"
            className="form-control"
            placeholder="Nhập địa chỉ email"
            name="account"
            value={account}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Nhập mật khẩu"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-4 pt-4">
          <button className="btn-account-submit" type="submit">
            Đăng nhập
          </button>
        </div>

        <div className="text center">
          <span>Bạn chưa có tài khoản?</span>
          <Link to="/register">Đăng ký mới</Link>
          <br />
          <Link to="/">Quên mật khẩu</Link>
        </div>
      </form>
    </div>
  );
}
