import {
  GET_PANIER,
  ADD_PANIER,
  UPDATE_PANIER,
  DELETE_PANIER,
  GET_TOTAL_PANIER,
  ADD_TOTAL_PANIER,
} from "../constants/ActionTypesPanier";

const initialState = {
  panier: [],
  token: localStorage.getItem("token"), //null
  msg: null,
  total: [],
};

const PanierReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PANIER:
      // localStorage.setItem("token", payload.token);

      return {
        ...state,
        panier: payload.panierr,
      };
    case ADD_PANIER:
      console.log("rredf", payload);
      return {
        ...state,

        msg: payload.msg,
        ...payload,
      };
    case UPDATE_PANIER:
      //console.log(payload);
      return {
        ...state,

        msg: payload.msg,
        ...payload,
      };
    case DELETE_PANIER:
      //console.log(payload);
      return {
        ...state,

        msg: payload.msg,
        ...payload,
      };

    case GET_TOTAL_PANIER:
      console.log("total panier paylod", payload);
      return {
        ...state,
        total: payload.totPanier,
        msg: payload.msg,
        ...payload,
      };
    case ADD_TOTAL_PANIER:
      console.log("state", payload);

      return {
        ...state,

        msg: payload.msg,
        ...payload,
      };
    case GET_TOTAL_PANIER:
      console.log("total panier paylod", payload);
      return {
        ...state,
        total: payload.totPanier,
        msg: payload.msg,
        ...payload,
      };
    default:
      return state;
  }
};

export default PanierReducer;
