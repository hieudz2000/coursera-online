import "./CourseDetailsTeacher.scss";

function showItems(listItem) {
  return listItem.map((item) => {
    return (
      <li className="nav-item">
        <a className="" href="/">
          <i className="fas fa-chevron-right"></i>
          <span className="ms-1">{item}</span>
        </a>
      </li>
    );
  });
}
function CourseDetailsTeacher() {
  var listItem = [
    "Hiểu được thế nào là quản trị và quản trị cuộc đời",
    "Có được khả năng định vị bản thân một cách chính xác và nhanh chóng",
    "Nắm được 4 chiến lược thực hiện mục tiêu chiếc lược cuộc đời",
    "Biết được phương pháp, cách thức thực hiện mục tiêu thành công",
    "Khám phá giá trị bản thân và vận dụng nguồn lực sẵn có",
  ];
  return (
    <div className="course-details-teacher mt-2 mb-3">
      <div className="row">
        <div className="col-4">
          <a href="/">
            <img
              src="https://static.unica.vn/upload/images/2019/04/quan-tri-cuoc-doi-le-tham-duong_m_1555575906.jpg"
              className="img-fuild m-auto"
              alt=""
            ></img>
          </a>
        </div>
        <div className="col-6">
          <h5>Quản trị cuộc đời - Đường đến thành công</h5>
          <ul className="nav">
            <li className="nav-item">
              <a className="" href="/">
                <i className="far fa-list-alt"></i>
                <span className="ms-1">11 bài giảng</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="ms-3" href="/">
                <i className="far fa-clock"></i>
                <span className="ms-1">02 giờ 31 phút</span>
              </a>
            </li>
          </ul>
          <ul className="nav flex-column mt-2">{showItems(listItem)}</ul>
        </div>
        <div className="col-2">
          <div className="info-price">
            <strong>
              <span>499,000</span> <sup>đ</sup>{" "}
            </strong>
            <br />
            <del className="justify-content-end">
              800,000<sup>đ</sup>
            </del>
            <h6 className="justify-content-end">OFF 38%</h6>
            <button type="button" className="btn btn-danger w-100">
              CHI TIẾT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseDetailsTeacher;
