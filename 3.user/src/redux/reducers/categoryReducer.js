import {
  CATEGORY_ITEM_FAIL,
  CATEGORY_ITEM_REQUEST,
  CATEGORY_ITEM_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "../constants/categoryConstants";

export const categoryItemReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_ITEM_REQUEST:
      return { loading: true };
    case CATEGORY_ITEM_SUCCESS:
      return { loading: false, data: action.payload };
    case CATEGORY_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const categoryListReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true };
    case CATEGORY_LIST_SUCCESS:
      return { loading: false, data: action.payload };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
