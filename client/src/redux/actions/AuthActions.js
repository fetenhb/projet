import axios from "axios";
import {
  INSCRIPTION,
  CONNEXION,
  LOADING_UTILISATEUR,
  DECONNEXION,
  GET_AUTH_USER,
  AUTH_ERRORS,
} from "../constants/ActionTypes";

//Set the user loading
const utilisateurLoading = () => (dispatch) => {
  dispatch({
    type: LOADING_UTILISATEUR,
  });
};
// inscription
export const inscription = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/utilisateur/inscription", formData);
    dispatch({
      type: INSCRIPTION,
      payload: res.data, // { msg: 'User registred with success', user, token }
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

// connexion
export const connexion = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/utilisateur/connexion", formData);
    dispatch({
      type: CONNEXION,
      payload: res.data, // { msg: 'Logged in with success', user, token }
    });
  } catch (error) {
    console.log(errors);
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

// Get auth user
export const getAuthUser = () => async (dispatch) => {
  try {
    //headers
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.get("/utilisateur/infor", config);
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data, // {user: req.user}
    });
  } catch (error) {
    console.log(error);
  }
};

export const deconnexion = () => (dispatch) => {
  dispatch({
    type: DECONNEXION,
  });
};
