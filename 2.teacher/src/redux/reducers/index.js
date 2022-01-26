import { combineReducers } from "redux";
import ThemeReducer from './ThemeReducer'
import NotifyReducer from './NotiryReducer'
const rootReducer = combineReducers(
    {
        ThemeReducer,
        NotifyReducer
    }
)

export default rootReducer;