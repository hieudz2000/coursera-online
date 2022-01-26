import React from "react";
import { Nav, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import UserCourse from "../../component/user/usercourse/UserCourse";
import "./user.scss";

export default function MyCourse() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <div style={{ marginTop: "60px" }}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="course">
        <div className="bg-dashboash-user">
          <div className="container">
            <p>Học viên: {userInfo.success.name}</p>
            <Nav className="tab-panel-button">
              <Nav.Item className="button-tab-panel">
                <Nav.Link eventKey="course">
                  <i class="fas fa-book"></i>Khóa học
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        <div className="content-main-user">
          <div className="container">
            <div className="wrapper">
              <Tab.Content>
                <Tab.Pane eventKey="course">
                  <UserCourse />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
}
