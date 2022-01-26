import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  categoryItemReducer,
  categoryListReducer,
} from "./reducers/categoryReducer";
import { courseDetailTrialReducer } from "./reducers/courseReducer";
import { homeReducer } from "./reducers/homeReducer";
import { tagItemReducer, tagListReducer } from "./reducers/tagReducer";
import {
  buyCourseReducer,
  userCourseDetailReducer,
  userCoursesReducer,
  userDetailsReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducer";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const reducer = combineReducers({
  homeList: homeReducer,
  categoryItem: categoryItemReducer,
  categoryList: categoryListReducer,
  userSignin: userSigninReducer,
  userDetails: userDetailsReducer,
  userCourses: userCoursesReducer,
  userCourseDetail: userCourseDetailReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userRegister: userRegisterReducer,
  buyCourse: buyCourseReducer,
  tagItem: tagItemReducer,
  tagList: tagListReducer,
  courseDetailTrial: courseDetailTrialReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
