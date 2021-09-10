import axios from "axios";
import { GET_COMMANDES } from "../constants/ActionTypesCmnd";

//get commande
export const get_commandes = () => (dispatch) => {
  axios
    .get("http://localhost:5000/categorie/getCategorie")

    .then((res) => dispatch({ type: GET_COMMANDES, payload: res.data }))
    .catch((err) => console.log(err));
};
//add categorie
export const add_commande = (newCmnd) => (dispatch) => {
  axios
    .post("http://localhost:5000/categorie/addCategorie", newCmnd)
    .then((res) => dispatch(get_categories()))
    .catch((err) => console.log(err));
};
