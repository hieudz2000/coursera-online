import React from "react";
import AboutCourse from "./aboutCourse/AboutCourse";
import CourseContent from "./courseContent/CourseContent";
import Rand from "./rand/Rand";
// import Recomment from "./recomment/Recomment";
import Teacher from "./teacher/Teacher";

export default function CourseInfo({ data }) {
  return (
    <div>
      <AboutCourse data={data} />
      <CourseContent data={data} />
      <Teacher data={data} />
      <Rand data={data} />
      {/* <Recomment/> */}
    </div>
  );
}
