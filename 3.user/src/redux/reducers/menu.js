import { INIT_MENUS } from "../constants/ActionsMenu";

let menus = [];

const MenuReducer = (state = menus, action) => {
  switch (action.type) {
    case INIT_MENUS:
      state = action.menus;
      return [...state];
    default:
      return state;
  }
};
export default MenuReducer;
