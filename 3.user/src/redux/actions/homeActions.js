import { getData } from "../../utils/fecthData";
import {
  HOME_LIST_FAIL,
  HOME_LIST_REQUEST,
  HOME_LIST_SUCCESS,
} from "../constants/homeConstants";

export const getHomeList = () => async (dispatch) => {
  dispatch({
    type: HOME_LIST_REQUEST,
  });
  try {
    const bestSalesCourses = await getData("topCourse");
    const newCourses = await getData("newCourse");
    const featuredTeachers = await getData("topTeacher");

    dispatch({
      type: HOME_LIST_SUCCESS,
      payload: {
        bestSalesCourses: [...bestSalesCourses],
        newCourses: [...newCourses],
        featuredTeachers: [...featuredTeachers],
      },
    });
  } catch (error) {
    dispatch({
      type: HOME_LIST_FAIL,
      payload: error.message,
    });
  }
};
