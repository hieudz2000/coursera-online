import { combineReducers } from "redux";
import courseReducer from "./courses";
import teacher from "./teachers";
import course_content from "./course_content";
import comments from "./comment";
import menus from "./menu";
const myReducers = combineReducers({
  courseReducer,
  teacher,
  course_content,
  comments,
  menus
});

export default myReducers;
