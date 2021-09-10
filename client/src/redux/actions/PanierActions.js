import axios from "axios";
import {
  GET_PANIER,
  ADD_PANIER,
  UPDATE_PANIER,
  INCREMENT_QUANT,
  DECREMENT_QUANT,
  DELETE_PANIER,
} from "../constants/ActionTypesPanier";
//get panier
export const get_panier = () => async (dispatch) => {
  try {
    //headers
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const res = await axios.get(
      "http://localhost:5000/panier/getPanier",

      config
    );
    dispatch({
      type: GET_PANIER,
      payload: res.data, // {user: req.user}
    });
  } catch (error) {
    console.log(error);
  }
};

//add panier
export const add_panier = (newPanier) => async (dispatch) => {
  try {
    //headers
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const res = await axios.post(
      "http://localhost:5000/panier/addPanier",
      newPanier,
      config
    );
    dispatch({
      type: ADD_PANIER,
      payload: res.data, // {user: req.user}
    });
  } catch (error) {
    console.log(error);
  }
};
//edit panier
export const edit_panier = (idPanier, newPanier) => async (dispatch) => {
  try {
    //headers
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const res = await axios.put(
      "http://localhost:5000/panier/updatePanier/" + idPanier,
      newPanier,
      config
    );
    dispatch({
      type: UPDATE_PANIER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

//delete panier

export const delete_panier = (idPanier) => async (dispatch) => {
  try {
    //headers
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const res = await axios.delete(
      "http://localhost:5000/panier/deletePanier/" + idPanier,

      config
    );
    dispatch({
      type: DELETE_PANIER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
