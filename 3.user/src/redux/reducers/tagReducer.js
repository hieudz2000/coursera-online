import {
  TAG_ITEM_FAIL,
  TAG_ITEM_REQUEST,
  TAG_ITEM_SUCCESS,
  TAG_LIST_FAIL,
  TAG_LIST_REQUEST,
  TAG_LIST_SUCCESS,
} from "../constants/tagConstants";

export const tagItemReducer = (state = {}, action) => {
  switch (action.type) {
    case TAG_ITEM_REQUEST:
      return { loading: true };
    case TAG_ITEM_SUCCESS:
      return { loading: false, data: action.payload };
    case TAG_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tagListReducer = (state = {}, action) => {
  switch (action.type) {
    case TAG_LIST_REQUEST:
      return { loading: true };
    case TAG_LIST_SUCCESS:
      return { loading: false, data: action.payload };
    case TAG_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
