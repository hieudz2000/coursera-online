import { INIT_COURSES } from "../constants/ActoinsCourse";
import * as types from "./../constants/ActionsConstants";
var initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLICK_MORE:
      return state;
    case INIT_COURSES:
      state = action.courses;
      return [...state];
    default:
      return state;
  }
};
export default courseReducer;
