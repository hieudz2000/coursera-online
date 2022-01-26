import React from "react";
import "./Navbar.scss";

export default function Navbar({ list }) {
  // console.log("List navbar : ", list);
  return (
    <nav className="navibar-mobile">
      <div className="navibar-mobile-container">
        <div className="sidenav-brand">
          <span className="remove-navibar">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </span>
          <div className="sm_logo_brand">
            <img src="https://unica.vn/media/img/logo-unica.svg" alt="" />
          </div>
        </div>
        <ul className="nav-menu ">
          <li>
            <a href="/">
              <i className="fa fa-home" aria-hidden="true"></i>Trang chủ
            </a>
          </li>
          <li>
            <a
              title="Học ngoại ngữ từ giảng viên chuyên gia hàng đầu Việt Nam"
              href="/course/ngoai-ngu"
            >
              <i className="fa fa fa-language" aria-hidden="true"></i>Ngoại ngữ
            </a>
          </li>
          <li>
            <a
              title="Khóa học Marketing thực chiến từ giảng viên chuyên gia hàng đầu"
              href="/course/marketing"
            >
              <i className="fas fa-chart-line" aria-hidden="true"></i>
              Marketing
            </a>
          </li>
          <li>
            <a
              title="Học tin học văn phòng từ giảng viên chuyên gia hàng đầu"
              href="/course/tin-hoc-van-phong"
            >
              <i className="fa fa fa-desktop" aria-hidden="true"></i>Tin học văn
              phòng
            </a>
          </li>
          <li>
            <a
              title="Học thiết kế từ giảng viên chuyên gia hàng đầu Việt Nam"
              href="/course/thiet-ke"
            >
              <i className="fa fa fa-paint-brush" aria-hidden="true"></i>Thiết
              kế
            </a>
          </li>
          <li>
            <a
              title="Học kinh doanh và khởi nghiệp từ giảng viên chuyên gia hàng đầu"
              href="/course/kinh-doanh-khoi-nghiep"
            >
              <i className="fa fa fa-rocket" aria-hidden="true"></i>Kinh doanh -
              Khởi nghiệp
            </a>
          </li>
          <li>
            <a
              title="Học phát triển cá nhân từ giảng viên chuyên gia hàng đầu"
              href="/course/phat-trien-ca-nhan"
            >
              <i className="far fa-lightbulb" aria-hidden="true"></i>Phát triển
              cá nhân
            </a>
          </li>
          <li>
            <a
              title="Khóa học Sales, bán hàng từ giảng viên chuyên gia hàng đầu"
              href="/course/sales-ban-hang"
            >
              <i className="fa fa fa-shopping-cart" aria-hidden="true"></i>{" "}
              Sales, bán hàng
            </a>
          </li>
          <li>
            <a
              title="Học công nghệ thông tin từ giảng viên chuyên gia hàng đầu"
              href="/course/cong-nghe-thong-tin"
            >
              <i className="fa fa fa-code" aria-hidden="true"></i>Công nghệ
              thông tin
            </a>
          </li>
          <li>
            <a
              title="Khóa học sức khỏe giới tính từ chuyên gia hàng đầu"
              href="/course/suc-khoe-gioi-tinh"
            >
              <i className="fa fa fa-heartbeat" aria-hidden="true"></i>Sức khỏe
              - Giới tính
            </a>
          </li>
          <li>
            <a
              title="Khóa học phong cách từ giảng viên chuyên gia hàng đầu"
              href="/course/phong-cach-song"
            >
              <i className="fas fa-utensils" aria-hidden="true"></i>Phong cách
              sống
            </a>
          </li>
          <li>
            <a
              title="Học nuôi dạy con từ giảng viên chuyên gia hàng đầu"
              href="/course/nuoi-day-con"
            >
              <i className="fa fa fa-child" aria-hidden="true"></i>Nuôi dạy con
            </a>
          </li>
          <li>
            <a
              title="Khóa học hôn nhân và gia đình từ giảng viên chuyên gia hàng đầu"
              href="/course/hon-nhan-gia-dinh"
            >
              <i className="fas fa-users" aria-hidden="true"></i>Hôn nhân & Gia
              đình
            </a>
          </li>
          <li>
            <a
              title="Khóa học nhiếp ảnh, dựng phim từ giảng viên chuyên gia hàng đầu"
              href="/course/nhiep-anh-dung-phim"
            >
              <i className="fa fa fa-camera" aria-hidden="true"></i>Nhiếp ảnh,
              dựng phim
            </a>
          </li>
        </ul>
        <div className="sidenav-footer">
          <h4 className="title-nav">
            <i className="fa fa-info-circle" aria-hidden="true"></i> Hỗ trợ
          </h4>
          <ul>
            <li>
              <i className="fas fa-mobile-alt" aria-hidden="true"></i>Hotline:
              <span>
                <a href="tel: 090 488 6095"> 090 488 6095</a>
              </span>
            </li>
            <li>
              <i className="fa fa-envelope" aria-hidden="true"></i>Email:
              <span>cskh@unica.vn</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
