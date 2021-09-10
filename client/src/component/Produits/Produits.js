import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_produit,
  get_categories,
} from "../../redux/actions/CategorieActions";
import ProduitCard from "./ProduitCard";

const Produits = (props) => {
  const categorieFound = props.categorie.find(
    (cat) => cat.nom == props.match.params.title
  );
  const user = useSelector((state) => state.authReducer.user);
  console.log(user && user.role);
  console.log(props.categorie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_categories());
  }, []);
  const [titre, setTitre] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImage] = useState("");

  console.log(categorieFound && categorieFound._id);
  const ajout_prod = () => {
    dispatch(
      add_produit(
        { titre, prix, description, images },
        categorieFound && categorieFound._id
      )
    );
  };
  return (
    <div>
      {" "}
      {user && user.role == 0 ? (
        <div>
          <div class="container">
            <button
              type="button"
              class="btn btn-info btn-lg"
              data-toggle="modal"
              data-target="#myModal"
            >
              ajouter produit
            </button>
            <div class="modal fade" id="myModal" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    {" "}
                    <h4 class="modal-title">ajouter produit</h4>
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>
                  <div class="modal-body">
                    <div
                      class="form-holder activee"
                      style={{ marginLeft: "60px" }}
                    >
                      <input
                        type="text"
                        placeholder="titre"
                        class="form-controll-cnx"
                        style={{ width: "300px" }}
                        value={titre}
                        onChange={(e) => setTitre(e.target.value)}
                      />
                    </div>
                    <div
                      class="form-holder activee"
                      style={{ marginLeft: "60px" }}
                    >
                      <input
                        style={{ width: "300px" }}
                        type="text"
                        placeholder="prix"
                        class="form-controll-cnx"
                        value={prix}
                        onChange={(e) => setPrix(e.target.value)}
                      />
                    </div>{" "}
                    <div
                      class="form-holder activee"
                      style={{ marginLeft: "60px" }}
                    >
                      <input
                        style={{ width: "300px" }}
                        type="text"
                        placeholder="description"
                        class="form-controll-cnx"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div
                      class="form-holder activee"
                      style={{ marginLeft: "60px" }}
                    >
                      <input
                        style={{ width: "300px" }}
                        type="text"
                        placeholder="image produit"
                        class="form-controll-cnx"
                        value={images}
                        onChange={(e) => setImage(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-info btn-lg"
                      data-dismiss="modal"
                      onClick={ajout_prod}
                    >
                      ajouter
                    </button>
                    <button
                      type="button"
                      class="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            {categorieFound &&
              categorieFound.prod.map((el, i) => (
                <ProduitCard el={el} key={i} />
              ))}

            {console.log(categorieFound)}
          </div>
        </div>
      ) : (
        <div class="row">
          {categorieFound &&
            categorieFound.prod.map((el, i) => (
              <ProduitCard el={el} key={i} categorieFound={categorieFound} />
            ))}

          {console.log(categorieFound)}
        </div>
      )}{" "}
    </div>
  );
};

export default Produits;
