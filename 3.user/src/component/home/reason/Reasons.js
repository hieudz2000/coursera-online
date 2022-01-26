import { Component } from "react";
import ReasonItem from "./ReasonItem";

class Reasons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var reasons = [
      { iconClass: "fa fa fa-language d-block", title: "Ngoại thương" },
      { iconClass: "fa fa fa-desktop d-block", title: " Tin học văn phòng" },
      { iconClass: "fa fa fa-paint-brush d-block", title: "Thiết kế" },
      {
        iconClass: "fa fa fa-rocket d-block",
        title: " Kinh doanh - Khởi nghiệp",
      },
      { iconClass: "fa fa fa-language d-block", title: "Ngoại thương" },
      { iconClass: "fa fa fa-desktop d-block", title: " Tin học văn phòng" },
      { iconClass: "fa fa fa-paint-brush d-block", title: "Thiết kế" },
      {
        iconClass: "fa fa fa-rocket d-block",
        title: " Kinh doanh - Khởi nghiệp",
      },
      {
        iconClass: "fa fa fa-rocket d-block",
        title: " Kinh doanh - Khởi nghiệp",
      },
      {
        iconClass: "fa fa fa-rocket d-block",
        title: " Kinh doanh - Khởi nghiệp",
      },
      {
        iconClass: "fa fa fa-rocket d-block",
        title: " Kinh doanh - Khởi nghiệp",
      },
      {
        iconClass: "fa fa fa-rocket d-block",
        title: " Kinh doanh - Khởi nghiệp",
      },
    ];
    return <div className="row mt-3 mb-4">{this.showReasonItem(reasons)}</div>;
  }
  showReasonItem(items) {
    if (items != null) {
    return  items.map((item, index) => {
        return <ReasonItem key={"item" + index} item={item} />;
      });
    }
    return "";
  }
}

export default Reasons;
