import axios from "axios";
import { GET_CATEGORIES } from "../constants/ActionTypesCat";
//get categorie
export const get_categories = () => (dispatch) => {
  axios
    .get("http://localhost:5000/categorie/getCategorie")

    .then((res) => dispatch({ type: GET_CATEGORIES, payload: res.data }))
    .catch((err) => console.log(err));
};

//add categorie
export const add_categorie = (newCategorie) => (dispatch) => {
  axios
    .post("http://localhost:5000/categorie/addCategorie", newCategorie)
    .then((res) => dispatch(get_categories()))
    .catch((err) => console.log(err));
};
//edit categorie

export const edit_categorie = (idCategorie, editedCategorie) => (dispatch) => {
  axios
    .put(
      "http://localhost:5000/categorie/UpdateCategorie/" + idCategorie,
      editedCategorie
    )
    .then((res) => dispatch(get_categories()))
    .catch((err) => console.log(err));
};

//delete categorie

export const delete_categorie = (idCategorie) => (dispatch) => {
  axios
    .delete("http://localhost:5000/categorie/deleteCategorie/" + idCategorie)
    .then((res) => dispatch(get_categories()))
    .catch((err) => console.log(err));
};
//add produit
export const add_produit = (newprod, idCategorie) => (dispatch) => {
  axios
    .put("http://localhost:5000/produit/addProduit/" + idCategorie, newprod)
    .then((res) => dispatch(get_categories()))
    .catch((err) => console.log(err));
};
//edit produit

export const edit_produit = (idCat, idProd, editedProd) => (dispatch) => {
  axios
    .put(
      "http://localhost:5000/produit/UpdateProduit/" + idCat + "/" + idProd,
      editedProd
    )
    .then((res) => dispatch(get_categories()))
    .catch((err) => console.log(err));
};
