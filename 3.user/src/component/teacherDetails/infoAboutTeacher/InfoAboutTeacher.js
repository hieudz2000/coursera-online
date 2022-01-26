import "./InfoAboutTeacher.scss";

function InfoAboutTeacher() {
  return (
    <div className="introduce-teacher">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="items-teacher">Giới thiệu</h3>
            <h4>
              <strong>
                Tiến sĩ - Diễn giả chuyên nghiệp - Chuyên gia Tài chính, Lãnh
                đạo, Nhân sự..... LÊ THẨM DƯƠNG
              </strong>
            </h4>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  Diễn giả chuyên nghiệp, chuyên gia hàng đầu trong nhiều lĩnh
                  vực như Tài chính, Lãnh đạo, Nhân sự …
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Giảng viên xuất sắc khoa Quản trị Kinh doanh trường Đại học
                  Ngân hàng thành phố Hồ Chí Minh
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Tiến sĩ Lê Thẩm Dương là 1 trong 8 thành viên của Tổ viết bài
                  của Thống đốc Ngân hàng Nhà nước Việt Nam
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Giảng viên chính chương trình cấp chứng chỉ hành nghề của Uỷ
                  ban Chứng khoán Nhà nước
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Tư vấn nghiệp vụ và quản trị cho các NHTM như NH Nông nghiệp
                  Tân Bình, NH Miền Tây, NH Công thương …
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="video-introduce-teacher">
              <iframe
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                title="video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoAboutTeacher;
