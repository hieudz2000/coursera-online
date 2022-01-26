import {
  COURSE_DETAIL_TRYAIL_FAIL,
  COURSE_DETAIL_TRYAIL_REQUEST,
  COURSE_DETAIL_TRYAIL_SUCCESS,
} from "../constants/courseConstants";
import { getData } from "../../utils/fecthData";

export const getCourseDetailTrial = (id) => async (dispatch) => {
  dispatch({ type: COURSE_DETAIL_TRYAIL_REQUEST });

  try {
    const data = await getData(`getTrialForGuest/${id}`);
    dispatch({ type: COURSE_DETAIL_TRYAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COURSE_DETAIL_TRYAIL_FAIL,
      payload: error.message,
    });
  }
};
