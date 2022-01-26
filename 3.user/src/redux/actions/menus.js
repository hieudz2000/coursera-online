import { INIT_MENUS } from "../constants/ActionsMenu"

export const initMenu = (menus) => {
    return { type: INIT_MENUS, menus }

}