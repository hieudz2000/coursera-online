import Home from "./component/home/Home";
import CourseDetails from "./component/courseDetails/CourseDetails";
import Category from "./component/category/Category";

export const routers = [
  
  {
    path: "/",
    label: "courses-details",
    main: () => {
      <CourseDetails />;
    },
  },
  {
    path: "",
    label: "error",
    main: () => {
      <Home />;
    },
  },
  {
    path: "",
    label: "",
    main: () => {
      <Category />;
    }
  }
];

