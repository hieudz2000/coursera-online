import { Component } from "react";
import "./footer.scss";
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer2 bg-dark text-white p-5">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="contact">
                  <div className="w-100 m-auto">
                    <h4 className="title1">HCPA</h4>

                    <ul className="justify-content-between ">
                      <li>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>

                        <span> 247 Cầu Giấy, Hà Nội</span>
                      </li>
                      <li>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <span> P503, 20 Phan Đình Giót, P.2, Q. Tân Bình</span>
                      </li>
                      <li>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <a href="tel:19001568">19001568</a>
                      </li>
                      <li>
                        <i className="fa fa-phone" aria-hidden="true"></i>

                        <a href="tel:0904886095" rel="">
                          090 488 6095
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <span> cskh@unica.vn </span>
                      </li>
                      <li>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <i aria-hidden="true"></i>
                        <span> 8:00 - 22:00 </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-4 ">
                <div className="contact">
                  <h4 className="title2">Về HCPA</h4>
                  <ul>
                    <li>Giới thiệu về HCPA</li>
                    <li>Câu hỏi thường gặp</li>
                    <li>Điều khoản dịch vụ</li>
                    <li>
                      <a href="/huong-dan-thanh-toan.html" rel="nofollow">
                        Hướng dẫn thanh toán
                      </a>
                    </li>
                    <li>
                      <a href="/kichhoat" rel="nofollow">
                        Kích hoạt khóa học
                      </a>
                    </li>
                    <li>
                      <a href="/blog">Góc chia sẻ</a>
                    </li>
                    <li>
                      <a href="/chinh-sach-bao-mat.html" rel="nofollow">
                        Chính sách bảo mật
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-4  ">
                <div className="contact">
                  <h4>Hợp tác liên kết</h4>
                  <ul>
                    <li>
                      <a href="/teacher">Đăng ký giảng viên</a>
                    </li>

                    <li>
                      <a href="/">Giải pháp e-learning</a>
                    </li>
                    <li>
                      <a href="/">Đào tạo doanh nghiệp</a>
                    </li>

                    <li>
                      <a href="/">Affiliate</a>
                    </li>
                    <li>
                      <a href="/">Agency</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
