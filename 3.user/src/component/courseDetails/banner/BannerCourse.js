import React from "react";
import { Link } from "react-router-dom";
import RateStar from "../../RateStar";
import "./bannerCourse.scss";

export default function BannerCourse({ data }) {
  return (
    <div id="banner-course" className="p-2">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={`/category/${data[0].Course_category}`}>
                    {data[0].categoryName}
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  {data[0].Course_header}
                </li>
              </ol>
            </nav>
            <h2>{data[0].Course_header}</h2>

            <div className="row">
              <div className="col-2">
                <img
                  src={data[0].teacherImage}
                  alt=""
                  className="d-inline-block"
                />
                <span style={{fontSize:12}}>{data[0].teacherName}</span>
              </div>
              <div className="col-3">
                <div className="d-inline-block">
                  <RateStar rating={data[0].Course_rate} />
                </div>
                <span>162 đánh giá</span>
              </div>
              <div className="col-4">
                <i className="fas fa-users"></i>
                <span>{data[0].totalStudent} học viên</span>
              </div>
              <div className="offset-2 col-1">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="heart-circle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  className="svg-inline--fa fa-heart-circle fa-w-16 fa-3x"
                >
                  <path
                    fill="currentColor"
                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm123.5 272.3L260.9 394.5c-7.1 7.4-18.7 7.4-25.9 0L124.5 280.3c-32.1-33.2-30.2-88.2 5.7-118.8 31.3-26.7 77.9-21.9 106.6 7.7l11.3 11.6 11.3-11.6c28.7-29.6 75.3-34.4 106.6-7.7 35.8 30.6 37.7 85.6 5.5 118.8z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
