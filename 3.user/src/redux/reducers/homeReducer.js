import {
  HOME_LIST_FAIL,
  HOME_LIST_REQUEST,
  HOME_LIST_SUCCESS,
} from "../constants/homeConstants";

export const homeReducer = (state = {}, action) => {
  switch (action.type) {
    case HOME_LIST_REQUEST:
      return { loading: true };
    case HOME_LIST_SUCCESS:
      return { loading: false, list: action.payload };
    case HOME_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
