import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserCourseDetail } from "../../redux/actions/userActions";
import LoadingPage from "../../component/Loading/Loading";
import "./mycoursedetail.scss";
import LessonDetail from "../../component/LessonDetail";
export default function MyCourseDetail() {
  const dispatch = useDispatch();
  const userCourseDetail = useSelector((state) => state.userCourseDetail);

  const { data, loading } = userCourseDetail;
  const { id } = useParams();
  useEffect(() => {
    dispatch(getUserCourseDetail(id));
  }, [dispatch, id]);
  return (
    <>
      {loading && <LoadingPage />}
      {data && (
        <div style={{ margin: "60px auto" }}>
          <div className="my-course-detail-header">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src={data[0].Course_image} alt="" />
                </div>
                <div className="col-6">
                  <h3>{data[0].Course_header}</h3>
                  <p>Tổng số học sinh: {data[0].totalStudent}</p>
                  <div className="box-shadow p-2 mt-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-7">
                <div className="mt-3">
                  <div className="box-shadow p-2 mt-1">
                    <div className="box-header">
                      <h6 className="pt-1 mb-0 pb-0">Chào mừng khóa học</h6>
                    </div>
                    <div className="box-body">
                      <p>{data[0].Course_description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="box-shadow p-2 mt-1">
                    <div className="box-header">
                      <h6 className="pt-1 mb-0 pb-0">Nội dung khóa học</h6>
                    </div>
                    <div className="box-body">
                      <Accordion>
                        {data[2].map((item, index) => (
                          <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>
                              Phần {index + 1}: {item.chap.Chap_description}
                            </Accordion.Header>

                            {item.lesson.map((lesson, index) => (
                              <Accordion.Body key={index}>
                                <LessonDetail index={index} lesson={lesson} />
                              </Accordion.Body>
                            ))}
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="mt-3">
                  <div className="box-shadow p-2 mt-1">
                    <h6 className="pt-1 mb-0 pb-0 text-center">Giáo viên</h6>
                    <div className="row teacher-info">
                      <div className="col-6">
                        <img src={data[0].teacherImage} alt="" />
                      </div>
                      <div className="col-6 teacher-name">
                        <p>{data[0].teacherName}</p>
                        <span>Giảng viên</span>
                        <Link to={`/teacher/${data[0].Author_ID}`}>
                          Chi tiết
                        </Link>
                      </div>
                    </div>

                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
