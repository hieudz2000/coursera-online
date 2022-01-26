import { getData } from "../../utils/fecthData";
import {
  TAG_ITEM_FAIL,
  TAG_ITEM_REQUEST,
  TAG_ITEM_SUCCESS,
  TAG_LIST_FAIL,
  TAG_LIST_REQUEST,
  TAG_LIST_SUCCESS,
} from "../constants/tagConstants";

export const getTagList = (id, page) => async (dispatch) => {
  dispatch({
    type: TAG_LIST_REQUEST,
  });
  try {
    const data = await getData(`getListCoursesByTag/${id}`);

    dispatch({
      type: TAG_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TAG_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const getTagItem = (id) => async (dispatch) => {
  dispatch({
    type: TAG_ITEM_REQUEST,
  });
  try {
    const data = await getData(`getCategoryByTag/${id}}`);

    dispatch({
      type: TAG_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TAG_ITEM_FAIL,
      payload: error.message,
    });
  }
};
