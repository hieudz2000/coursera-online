import { Component } from "react";
import { Link } from "react-router-dom";
import RateStar from "../RateStar";
import "./courseItem.scss";
class CourseItem extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
        <Link to={`/course/${this.props.course.Course_ID}`}>
          <div className="card h-100 shadow-sm bg-body rounded cart-hover">
            <img
              alt={this.props.course.Course_header}
              className="img-responsive"
              src={this.props.course.Course_image}
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.course.Course_header}</h5>
              <p className="sub-teacher-name m-0 p-0">
                {this.props.course.teacher}
              </p>
              <div className="row">
                <div className="col-6">
                  <div className="text-start mt-1">
                    <RateStar rating={this.props.course.Course_rate}></RateStar>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-end mt-1">
                    <p>
                      {this.props.course.Course_price} <sup>đ</sup>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default CourseItem;
