import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import CategorieReducer from "./CategorieReducer";
import PanierReducer from "./PanierReducer";
export default combineReducers({
  authReducer,
  CategorieReducer,
  PanierReducer,
});
