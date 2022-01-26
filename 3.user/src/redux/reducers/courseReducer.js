import {
  COURSE_DETAIL_TRYAIL_FAIL,
  COURSE_DETAIL_TRYAIL_REQUEST,
  COURSE_DETAIL_TRYAIL_SUCCESS,
} from "../constants/courseConstants";

export const courseDetailTrialReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_DETAIL_TRYAIL_REQUEST:
      return { loading: true };
    case COURSE_DETAIL_TRYAIL_SUCCESS:
      return { loading: false, data: action.payload };
    case COURSE_DETAIL_TRYAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
