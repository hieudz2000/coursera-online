import "./RatingTeacher.scss";

function RatingTeacher() {
  return (
    <div className="rating-teacher">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <a href="/">
              <img
                alt=""
                className="img-fluid"
                src="https://static.unica.vn/uploads/thaoptt09@gmail.com/February282018936am_ts-le-tham-duong_thumb.jpg"
              ></img>
            </a>
          </div>
          <div className="col-4 position-relative">
            <div className="message position-absolute">
              <h3>TS.LÊ THẨM DƯƠNG</h3>
              <h4>
                Tiến sĩ - Diễn giả chuyên nghiệp - Chuyên gia Tài chính, Lãnh
                đạo, Nhân sự.....
              </h4>
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <i class="fab fa-facebook"></i>
                    <span className="ms-1">Follow mình</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <i class="far fa-comment-dots"></i>
                    <span className="ms-1">Nhắn cho mình</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-5 position-relative">
            <ul class="nav justify-content-between position-absolute">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <h2>2</h2>
                  <div>Khoá học</div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <h2>2215</h2>
                  <div>Học viên</div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <h2>
                    5 <i class="fas fa-star"></i>
                  </h2>
                  <div>Đánh giá trung bình</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RatingTeacher;
