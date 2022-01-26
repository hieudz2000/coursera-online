import React from "react";
import "./teacher.scss";
import { Link } from "react-router-dom";

export default function TeacherItem({ teacherList }) {
  return (
    <div className="typical-teacher">
      <h3>Giảng viên tiêu biểu</h3>
      <div className="typical-teacher-body">
        {teacherList.map((teacher) => (
          <Link to="/teacher/:id">
            <div key={teacher.User_ID} className="typical-teacher-item">
              <div className="typical-teacher-item-img">
                <img src={teacher.User_image} alt={teacher.User_name} />
              </div>
              <div className="typical-teacher-item-title">
                <p className="name">{teacher.User_name}</p>
                <p className="text">Giảng viên tiêu biểu</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
