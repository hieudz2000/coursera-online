import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCourseItem from "./UserCourseItem";
import LoadingPage from "../../Loading/Loading";
import { getUserCourses } from "../../../redux/actions/userActions";
import "./usercourse.scss";

export default function UserCourse() {
  const dispatch = useDispatch();
  const userCourses = useSelector((state) => state.userCourses);
  const { list, loading } = userCourses;
  useEffect(() => {
    dispatch(getUserCourses());
  }, [dispatch]);

  return (
    <>
      {loading && <LoadingPage />}
      {list && (
        <div>
          <h3>Khóa học của tôi</h3>
          <div className="my-course-wrapper">
            {list.map((item) => (
              <UserCourseItem key={item.id} course={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
