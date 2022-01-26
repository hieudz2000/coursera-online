import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../../../redux/actions/userActions";
import "./header.scss";

export default function Header() {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-brand">
            <Link to="/">
              <img src="https://unica.vn/media/img/logo-unica.svg" alt="" />
            </Link>
          </div>
          <div className="search-form">
            <form className="d-flex">
              <div className="wrap">
                <div className="search">
                  <input
                    type="text"
                    className="searchTerm"
                    placeholder="Tìm khóa học, giáo viên"
                  />
                  <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {userInfo !== null ? (
            <div className="nav-user-action">
              <img src={userInfo.success.image} alt="avatar" />

              <Dropdown className="d-inline mx-2 cus-dropdown">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  {userInfo.success.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/user/profile">Tài khoản của tôi</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/user/my-course">Khóa học của tôi</Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={signoutHandler}>
                    Đăng xuất
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <div className="nav-user-action">
              <Link to="./login" className="btn btn-login">
                Đăng nhập
              </Link>
              <Link to="./register" className="btn btn-register">
                Đăng ký
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
