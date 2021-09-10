import {
  INSCRIPTION,
  CONNEXION,
  LOADING_UTILISATEUR,
  DECONNEXION,
  GET_AUTH_USER,
  AUTH_ERRORS,
} from "../constants/ActionTypes";

const initialState = {
  token: localStorage.getItem("token"), //null
  user: null,
  isAuth: false,
  isLoading: true,
  msg: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_UTILISATEUR:
      return {
        ...state,
        isLoading: true,
      };
    case INSCRIPTION:
    case CONNEXION:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        msg: payload.msg,
        ...payload,
      };
    case GET_AUTH_USER:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        ...payload,
      };
    case AUTH_ERRORS:
    case DECONNEXION:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isLoading: false,
        isAuth: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
