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

export const inscription = (formData) => async (dispatch) => {
  dispatch(utilisateurLoading());
  try {
    const res = await axios.post("/utilisateur/inscription", formData);
    dispatch({
      type: INSCRIPTION,
      payload: res.data, // { msg: 'User registred with success', user, token }
    });
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
  }
};
// inscription

// connexion
export const connexion = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/utilisateur/connexion", formData);
    dispatch({
      type: CONNEXION,
      payload: res.data, // { msg: 'Logged in with success', user, token }
    });
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

// Get auth user
export const getAuthUser = () => async (dispatch) => {
  dispatch(utilisateurLoading());

  try {
    //headers
    const config = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const res = await axios.get("/utilisateur/infor", config);
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data, // {user: req.user}
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};
export const deconnexion = () => (dispatch) => {
  dispatch({
    type: DECONNEXION,
  });
};

export const edit_user = (idUser, editedUser) => (dispatch) => {
  axios
    .put("/utilisateur/modifierUtilisateur/" + idUser, editedUser)
    .then((res) => dispatch(getAuthUser()))
    .catch((err) => console.log(err));
};
