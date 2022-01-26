import React, { useState } from "react";
import "./teacher.scss";
import "./../../common/style.scss";
import { Link } from "react-router-dom";
export default function Teacher({ data }) {
  const [text, setText] = useState("Xem thêm");
  const [seeMore, setSeeMore] = useState(true);

  const handleSeeMore = () => {
    if (seeMore) {
      setSeeMore(false);
      setText("Thu gọn");
    } else {
      setSeeMore(true);
      setText("Xem thêm");
    }
  };
  const style = !seeMore
    ? null
    : {
        display: "-webkit-box",
      };

  return (
    <div className="u-course-teacher">
      <h4 className="pt-1 mb-0 pb-0">Thông tin giảng viên</h4>
      <hr />
      <div className="row">
        <div className="col-3">
          <div className="uct-left">
            <div className="uct-ava-gv">
              <img className="lazy" src={data[0].teacherImage} alt=""></img>
            </div>
            <div className="uct-rate-gv">
              <ul>
                <li>
                  <i className="fa fa-users" aria-hidden="true"></i>
                  <span>36894</span> học viên
                </li>
                <li>
                  <i className="fa fa-play-circle" aria-hidden="true"></i>
                  <span>4</span> khóa học
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-9">
          {" "}
          <div className="uct-right">
            <div className="uct-name-gv">
              <Link to={`/teacher/${data[0].Author_ID}`}>
                {data[0].teacherName}
              </Link>
            </div>
            <div className="uct-des-gv">
              Giảng viên Guitar - Youtuber nổi tiếng cộng đồng guitar Việt Nam
            </div>
            <div className="uct-more-gv" style={style}>
              <p>
                Giảng vi&ecirc;n H&agrave; Kế T&uacute; - Haketu với kinh nghiệm
                12 năm để chơi đ&agrave;n v&agrave; nghi&ecirc;n cứu về &acirc;m
                nhạc, 5 năm kinh nghiệm tổ chức c&aacute;c kh&oacute;a học
                Guitar offline tại &Uacute;c v&agrave; H&agrave; Nội, đ&agrave;o
                tạo h&agrave;ng trăm học vi&ecirc;n trong những kh&oacute;a:
                Guitar cổ điển, Fingerstyle v&agrave; Đệm h&aacute;t.
              </p>

              <p>
                H&agrave; Kế T&uacute;&nbsp;hay c&ograve;n thường gọi l&agrave;
                Haketu&nbsp;l&agrave; một trong những Giảng vi&ecirc;n, Youtuber
                c&oacute; t&ecirc;n tuổi trong cộng đồng Guitar tại Việt
                Nam.&nbsp;
              </p>

              <p>
                22/7/2016 &nbsp;K&ecirc;nh youtube của anh đạt mốc 100k
                followers v&agrave; trở th&agrave;nh một trong những Cộng đồng
                Guitar lớn nhất Việt Nam.
              </p>

              <p>
                Phương ph&aacute;p giảng dạy của anh ch&uacute; trọng tới căn
                bản, &aacute;p dụng thực tế trong việc học nhạc v&agrave;
                lu&ocirc;n hướng tới học vi&ecirc;n để c&oacute; hiệu quả cao
                nhất.
              </p>

              <p>
                Haketu l&agrave; một trong những người đầu ti&ecirc;n c&oacute;
                k&ecirc;nh Youtube dạy guitar phi lợi nhuận tại Việt Nam.
              </p>

              <p>
                - Thời điểm hiện tại, k&ecirc;nh youtube của Haketu đ&atilde;
                đạt mức 160,000 subscribers.
              </p>

              <p>
                - Giảng vi&ecirc;n xuất ph&aacute;t từ học &acirc;m nhạc cổ
                điển, v&agrave; hiện đ&atilde; c&oacute; hơn 12 năm chơi
                đ&agrave;n v&agrave; nghi&ecirc;n cứu về guitar, cũng như viết
                ra h&agrave;ng trăm bản guitar tab để l&agrave;m học liệu.
              </p>

              <p>
                - Haketu được biết tới với phương ph&aacute;p truyền tải
                c&aacute;ch học đơn giản, dễ hiểu v&agrave; hiệu quả, n&ecirc;n
                nhiều người t&igrave;m tới học cả online v&agrave; offline rất
                đ&ocirc;ng.
              </p>

              <p>
                - Hiện tại Facebook cũng c&oacute; tr&ecirc;n 125,000 người theo
                d&otilde;i.
              </p>

              <p>
                - Thế mạnh của Haketu l&agrave; khả năng chuyển soạn fingerstyle
                độc tấu tr&ecirc;n guitar, v&agrave; nổi tiếng nhất l&agrave;
                Nhật k&yacute; của mẹ (nhạc sĩ Nguyễn Văn Chung).
              </p>
            </div>
            <div className="utc-more-btn">
              <button
                className="see-more-info-btn"
                type="button"
                onClick={handleSeeMore}
              >
                {text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
