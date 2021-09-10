import {
  GET_PANIER,
  ADD_PANIER,
  UPDATE_PANIER,
  INCREMENT_QUANT,
  DECREMENT_QUANT,
  DELETE_PANIER,
} from "../constants/ActionTypesPanier";

const initialState = {
  panier: [],
  token: localStorage.getItem("token"), //null
  msg: null,
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
      //console.log(payload);
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

    default:
      return state;
  }
};

export default PanierReducer;
