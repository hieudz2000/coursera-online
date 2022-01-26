import React from "react";
import CourseItem from "./CourseItem";

export default function CoursesSection({ category, title }) {
  return (
    <div className="mb-2 mt-4">
      <h4
        className="text-uppercase"
        style={{ fontSize: "20px", fontWeight: "bold" }}
      >
        {title}
      </h4>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {category.map((item, index) => (
          <CourseItem key={index} course={item} />
        ))}
      </div>
    </div>
  );
}
