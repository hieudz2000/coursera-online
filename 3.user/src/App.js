import { Component } from "react";
import Footer from "./component/layout/footer/Footer";
import Header from "./component/layout/header/Header";
import Home from "./screen/Home";
import TeacherDetails from "./screen/TeacherDetails";
import CourseDetails from "./screen/CourseDetails";
import Cart from "./screen/Cart";
import Category from "./screen/category/Category";
import { Route, Routes } from "react-router-dom";
import Tag from "./screen/category/Tag";
import MyCourse from "./screen/user/MyCourse";
import UserProfileScreen from "./screen/user/UserProfile";
import Test from "./screen/Test";
import MyCourseDetail from "./screen/MyCourseDetail/MyCourseDetail";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <Header />
        </div>
        <div id="main">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/tag/:id" element={<Tag />} />
            <Route path="/teacher/:id" element={<TeacherDetails />} />
            <Route path="/user/my-course" element={<MyCourse />} />
            <Route path="/user/profile" element={<UserProfileScreen />} />
            <Route
              path="/user/my-course/:id"
              element={<MyCourseDetail />}
            ></Route>
            <Route path="/test" element={<Test />}></Route>
          </Routes>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state, ownProps) => {
//   return {};
// };
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     initMenu: (menus) => {
//       dispatch(initMenu(menus));
//     },
//     initCourses: (courses) => {
//       dispatch(initCourses(courses));
//     },
//   };
// };
//export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
