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
  utilisateur: null,
  isAuth: false,
  isLoading: false,
  msg: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_UTILISATEUR:
      return {
        ...state,
        isLoading: false,
      };
    case INSCRIPTION:
    case CONNEXION:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
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
      return {
        ...state,
        token: null,
        isLoading: false,
        isAuth: false,
        utilisateur: null,
      };
    default:
      return state;
  }
};

export default authReducer;
