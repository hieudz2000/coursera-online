import React from "react";
import { Link } from "react-router-dom";

export default function UserCourseItem({ course }) {
  return (
    <div className="my-course-item">
      <div className="my-course-item-img">
        <img src={course.Course_image} alt="" />
      </div>
      <div className="my-course-item-txt">
        <p>{course.Course_header} </p>
        <p>Giảng viên: {course.teacherName}</p>
        <Link to={`/user/my-course/${course.Course_ID}`}>
          <i class="fas fa-play-circle"></i>Vào học ngay
        </Link>
      </div>
    </div>
  );
}
