import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BannerCourse from "../component/courseDetails/banner/BannerCourse";
import CardBuyCourse from "../component/courseDetails/cardBuyCourse/CardBuyCourse";
import CourseInfo from "../component/courseDetails/courseInfo/CourseInfo";
import { getCourseDetailTrial } from "../redux/actions/courseAction";
import LoadingPage from "../component/Loading/Loading";

export default function CourseDetails() {
  const dispatch = useDispatch();
  const courseDetailTrial = useSelector((state) => state.courseDetailTrial);
  const { data, loading } = courseDetailTrial;
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCourseDetailTrial(id));
  }, [dispatch, id]);
  return (
    <>
      {loading && <LoadingPage />}
      {data && (
        <div style={{ margin: "65px 0" }}>
          <BannerCourse data={data} />
          <div className="container">
            <div className="row">
              <div className="col-8">
                <CourseInfo data={data} />
              </div>
              <div className="col-4">
                <CardBuyCourse data={data} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
