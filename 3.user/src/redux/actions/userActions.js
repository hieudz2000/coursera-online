import { postData, getData, putData } from "../../utils/fecthData";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_COURSES_REQUEST,
  USER_COURSES_SUCCESS,
  USER_COURSES_FAIL,
  USER_COURSE_DETAIL_REQUEST,
  USER_COURSE_DETAIL_SUCCESS,
  USER_COURSE_DETAIL_FAIL,
  USER_BUY_COURSE_REQUEST,
  USER_BUY_COURSE_SUCCESS,
  USER_BUY_COURSE_FAIL,
} from "../constants/userContants";

export const signin = (account, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { account, password } });
  try {
    const data = await postData("login", { account, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify({ success: data.success }));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register =
  ({ name, account, password, phone, DoB }) =>
  async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: { name, account, password, phone, DoB },
    });
    try {
      const data = await postData("register", {
        name,
        account,
        password,
        phone,
        DoB,
        role: 2,
      });
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUserDetail = () => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const data = await getData("user/getProfile", userInfo.success.token);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: user });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const data = await putData(
      "user/updateProfile",
      user,
      userInfo.success.token
    );
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: {
        success: {
          token: userInfo.success.token,
          name: data.User_name,
          image: data.User_image,
        },
      },
    });

    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        success: {
          token: userInfo.success.token,
          name: data.User_name,
          image: data.User_image,
        },
      })
    );
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};

export const getUserCourses = () => async (dispatch, getState) => {
  dispatch({ type: USER_COURSES_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();

  try {
    const data = await getData("user/getBoughtCourses", userInfo.success.token);
    dispatch({ type: USER_COURSES_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_COURSES_FAIL,
      payload: message,
    });
  }
};

export const getUserCourseDetail = (id) => async (dispatch, getState) => {
  dispatch({ type: USER_COURSE_DETAIL_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();

  try {
    const data = await getData(
      `getCourseDetailsForStudent/${id}`,
      userInfo.success.token
    );
    dispatch({ type: USER_COURSE_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_COURSE_DETAIL_FAIL,
      payload: message,
    });
  }
};

export const userbuyCourse = (course_id) => async (dispatch, getState) => {
  dispatch({ type: USER_BUY_COURSE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const data = await postData(
      `user/buyCourse`,
      { Course_ID: course_id },
      userInfo.success.token
    );

    dispatch({ type: USER_BUY_COURSE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_BUY_COURSE_FAIL,
      payload: message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SIGNOUT });
  document.location.href = "/login";
};
