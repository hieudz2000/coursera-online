import * as types from "./../constants/ActionsConstants";

var initialState = [
  {
    name: "Nguyễn Văn Tú",
    rand: 5,
    comment: "Anh Tú dạy nhiệt tình, bài giảng dễ hiểu.",
  },
  {
    name: "Ngô Cao Cường",
    rand: 5,
    comment: "Bài giảng ngắn gọn, đầy đủ, dễ học",
  },
  {
    name: "Phạm Thị Minh Thư",
    rand: 5,
    comment: "Bài anh giảng sao mà hay thế,..",
  },
];
const myReducer = (state = initialState, action) => {
  var newState = state;
  switch (action.type) {
    case types.CLICK_MORE_COMMENT:
      newState.push(...initialState);
      return [...newState];
    default:
      return [...state];
  }
};
export default myReducer;
