import { INIT_COURSES } from "../constants/ActoinsCourse";
import * as types from "./../constants/ActionsConstants";
export const clickMore = ()=>{
    return {type: types.CLICK_MORE}
}
export const initCourses = (courses)=>{
    return {type: INIT_COURSES,courses};
}