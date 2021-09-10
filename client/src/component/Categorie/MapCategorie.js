import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_categorie,
  get_categories,
} from "../../redux/actions/CategorieActions";
import CategorieCard from "./CategorieCard";
import "./CategorieCard.css";
import "./MapCategorie.css";

const MapCategorie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_categories());
  }, []);

  const [nom, setNom] = useState("");
  const [image, setImage] = useState("");
  const categorie = useSelector((state) => state.CategorieReducer.categorie);
  const user = useSelector((state) => state.authReducer.user);

  const ajout_cat = () => {
    dispatch(add_categorie({ nom, image }));
  };
  return (
    <div>
      {user && user.role == 0 ? (
        <div>
          {" "}
          <div class="container">
            <button
              type="button"
              class="btn btn-info btn-lg"
              data-toggle="modal"
              data-target="#myModal"
            >
              ajouter catégorie
            </button>
            <div class="modal fade" id="myModal" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    {" "}
                    <h4 class="modal-title">ajouter catégorie</h4>
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
                        placeholder="Nom catégorie"
                        class="form-controll-cnx"
                        style={{ width: "300px" }}
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                      />
                    </div>
                    <div
                      class="form-holder activee"
                      style={{ marginLeft: "60px" }}
                    >
                      <input
                        style={{ width: "300px" }}
                        type="text"
                        placeholder="image catégorie"
                        class="form-controll-cnx"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                      />
                    </div>
                    {console.log(nom)}
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-info btn-lg"
                      data-dismiss="modal"
                      onClick={ajout_cat}
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
          <section class="hero-section">
            <div class="card-grid">
              {categorie &&
                categorie.map((cat, i) => <CategorieCard cat={cat} key={i} />)}
              {console.log(categorie)}
            </div>{" "}
          </section>
        </div>
      ) : (
        <section class="hero-section">
          <div class="card-grid">
            {categorie &&
              categorie.map((cat, i) => <CategorieCard cat={cat} key={i} />)}
            {console.log(categorie)}
          </div>{" "}
        </section>
      )}
    </div>
  );
};

export default MapCategorie;
