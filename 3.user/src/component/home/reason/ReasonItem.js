import { Component } from "react";
import { Link } from "react-router-dom";
import "./reasonItem.scss";
class ReasonItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-2 mb-2">
        <Link to="/category/1">
          <div className="reason-item w-100 m-1 text-center p-2 ">
            <i
              className={this.props.item.iconClass + " mt-2"}
              aria-hidden="true"
            />
            <p className="p-0 m-0 mt-1" style={{ fontSize: "12px" }}>
              {this.props.item.title}
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

ReasonItem.propTypes = {};

export default ReasonItem;
