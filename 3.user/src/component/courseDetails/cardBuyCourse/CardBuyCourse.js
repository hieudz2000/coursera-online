import "./cardBuyCourse.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userbuyCourse } from "../../../redux/actions/userActions";

function showItems(itemsInfo) {
  return itemsInfo.map((item, index) => {
    return (
      <li className="nav-item icon-items" key={"BuyCourse" + index}>
        <a href="/" className="nav-link">
          <i className={item.classIcon}></i>
          <span className="details-information-course">
            {item.contentTitle}
            {item.content == null ? (
              <span></span>
            ) : (
              <span> : {item.content}</span>
            )}
          </span>
        </a>
      </li>
    );
  });
}
function CardBuyCourse({ data }) {
  var items = [
    {
      classIcon: "fas fa-clock",
      contentTitle: "Thời lượng",
      content: "5 giờ 15 phút",
    },
    {
      classIcon: "fas fa-play-circle ",
      contentTitle: "Giáo trình",
      content: data[0].totalLessons,
    },
    {
      classIcon: "fas fa-history",
      contentTitle: "Sở hữu khoá học trọn đời",
      content: null,
    },
  ];

  const dispatch = useDispatch();
  const buyCourse = useSelector((state) => state.buyCourse);

  const { id } = useParams();

  const buyCourseHandler = () => {
    dispatch(userbuyCourse(id));
  };

  return (
    <div className="card-buy-course position-absolute">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <div className="card-title-info">
              <span className="money-after-sale">
                {data[0].Course_price}
                <sup>đ </sup>
              </span>
              <span className="percent-sale fw-light"> ( 63% 0FF )</span>
            </div>
            <div className="sale-time mt-3 mb-3 icon-items">
              <i className="fas fa-tachometer-alt"></i>
              Thời gian ưu đãi còn 1 ngày
            </div>
            <div className="btn-add-card mt-2">
              <button
                type="button"
                className="btn btn-danger w-100 mb-1"
                onClick={buyCourseHandler}
              >
                ĐĂNG KÝ HỌC
              </button>
            </div>
            <p className="text-center text-muted mt-3">
              Hoàn tiền trong 7 ngày nếu không hài lòng
            </p>
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <ul className="nav flex-column">{showItems(items)}</ul>
          </h6>
          <div className="footer-card"></div>
        </div>
      </div>
    </div>
  );
}

export default CardBuyCourse;
