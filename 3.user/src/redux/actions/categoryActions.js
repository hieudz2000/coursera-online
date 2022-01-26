import { getData } from "../../utils/fecthData";
import {
  CATEGORY_ITEM_FAIL,
  CATEGORY_ITEM_REQUEST,
  CATEGORY_ITEM_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "../constants/categoryConstants";

export const getCategoryList = (id, page) => async (dispatch) => {
  dispatch({
    type: CATEGORY_LIST_REQUEST,
  });
  try {
    const category = await getData(
      `getListCoursesByCategory/${id}?page=${page}}`
    );

    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: category,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const getCategoryItem = (id) => async (dispatch) => {
  dispatch({
    type: CATEGORY_ITEM_REQUEST,
  });
  try {
    const category = await getData(`getCategoryById/${id}}`);

    dispatch({
      type: CATEGORY_ITEM_SUCCESS,
      payload: category,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_ITEM_FAIL,
      payload: error.message,
    });
  }
};
