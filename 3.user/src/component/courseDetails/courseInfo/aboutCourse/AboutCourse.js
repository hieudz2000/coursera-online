import "./aboutcourse.scss";

const AboutCourse = ({ data }) => {
  return (
    <div className="mt-3">
      <div id="introduct" className="box-shadow p-2 mt-1">
        <h4 className="pt-1 mb-0 pb-0">Giới thiệu khóa học</h4>
        <hr />

        <p className="p-2">{data[0].Course_description}</p>
      </div>
    </div>
  );
};
export default AboutCourse;
