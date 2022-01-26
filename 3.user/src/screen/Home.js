import React, { useEffect } from "react";
import Reasons from "../component/home/reason/Reasons";
import Menu from "../component/menu/Menu";
import Banner from "../component/home/banner/Banner";
import CoursesSection from "../component/course/Courses";
import TeacherItem from "../component/home/teacher/TeacherItem";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getHomeList } from "../redux/actions/homeActions";
import LoadingPage from "../component/Loading/Loading";

export default function Home() {
  const dispatch = useDispatch();
  const homeList = useSelector((state) => state.homeList);
  const { list, loading } = homeList;

  useEffect(() => {
    dispatch(getHomeList());
  }, [dispatch]);

  return (
    <>
      {loading && <LoadingPage />}
      {list && (
        <>
          <div id="home" className="container" style={{ marginTop: "100px" }}>
            <div id="content">
              <div className="row">
                <div className="col-3 d-none d-md-block">
                  <Menu />
                </div>
                <div className="col-12 col-md-9 d-xs-none">
                  <Banner />
                </div>
              </div>
            </div>
            <div id="main" style={{ marginTop: "30px" }}>
              <div className="mt-3">
                <CoursesSection
                  category={list.bestSalesCourses}
                  title="Top bán chạy"
                />

                <CoursesSection
                  category={list.newCourses}
                  title="Khóa học mới nhất"
                />
              </div>
              <TeacherItem teacherList={list.featuredTeachers} />
            </div>
            <div id="reason" className="mt-3">
              <h2 className="w-75 text-center m-auto">
                Bạn chưa tìm thấy khóa học mình quan tâm ?<br /> Unica có hơn
                2.000 khóa học đang chờ bạn khám phá
              </h2>
              <Reasons />
            </div>
          </div>
          <div id="footer-top" className="footer1 text-white">
            <div className="text-center form-group">
              <h1>Trở thành giảng viên của HCPA</h1>
              <span>
                Hơn 500 giảng viên đã có khóa học trên HCPA<br></br>
              </span>

              <button type="submit" className="bb">
                Đăng kí ngay
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
