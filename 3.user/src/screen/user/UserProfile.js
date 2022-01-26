import React from "react";
import { Nav, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import UserProfile from "../../component/user/userprofile/UserProfile";
import "./user.scss";

export default function UserProfileScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <div style={{ marginTop: "60px" }}>
      {userInfo ? (
        <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
          <div className="bg-dashboash-user">
            <div className="container">
              <p>Học viên: {userInfo.success.name}</p>
              <Nav className="tab-panel-button">
                <Nav.Item className="button-tab-panel">
                  <Nav.Link eventKey="profile">
                    <i class="fas fa-user"></i>Hồ sơ cá nhân
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <div className="content-main-user">
            <div className="container">
              <div className="wrapper">
                <Tab.Content>
                  <Tab.Pane eventKey="profile">
                    <UserProfile token={userInfo.success.token} />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </div>
        </Tab.Container>
      ) : null}
    </div>
  );
}
