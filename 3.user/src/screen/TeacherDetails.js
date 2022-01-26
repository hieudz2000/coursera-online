import CourseTeacher from "../component/teacherDetails/courseTeacher/CourseTeacher";
import InfoAboutTeacher from "../component/teacherDetails/infoAboutTeacher/InfoAboutTeacher";
import RatingTeacher from "../component/teacherDetails/ratingTeacher/RatingTeacher";
import "../component/teacherDetails/TeacherDetails.scss";

function TeacherDetails() {
  return (
    <div className="mt-5">
      <div className="rating p-5 mt-2">
        <RatingTeacher />
      </div>
      <div className="mt-3">
        <InfoAboutTeacher />
      </div>
      <div className="mt-3">
        <CourseTeacher />
      </div>
    </div>
  );
}
export default TeacherDetails;
