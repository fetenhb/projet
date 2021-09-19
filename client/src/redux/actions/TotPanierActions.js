import axios from "axios";
import { ADD_TOTAL_PANIER } from "../constants/ActionTypesPanier";

//total panier

export const total_panier = (newPan) => async (dispatch) => {
  try {
    //headers
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    console.log("configg", config);
    const reqq = await axios.post(
      "http://localhost:5000/panier/addTotalPanierr",
      newPan,
      config
    );
    console.log("reqq", reqq);
    dispatch({
      type: ADD_TOTAL_PANIER,
      payload: reqq.data,
    });
  } catch (error) {
    console.log(error);
  }
};
