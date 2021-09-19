import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  delete_prod,
  edit_produit,
} from "../../redux/actions/CategorieActions";
import { Button, Modal, Form } from "react-bootstrap";
import { add_panier } from "../../redux/actions/PanierActions";

import "./ProduitCard.css";
const ProduitCard = ({ el, categorieFound }) => {
  const user = useSelector((state) => state.authReducer.user);
  const [titre, setTitre] = useState(el.titre);
  const [prix, setPrix] = useState(el.prix);
  const [images, setImages] = useState(el.images);
  const [description, setDescription] = useState(el.description);

  const dispatch = useDispatch();

  const edit = () => {
    dispatch(
      edit_produit(categorieFound && categorieFound._id, el._id, {
        titre,
        prix,
        description,
        images,
      })
    );
  };
  const ajout_panier = () => {
    dispatch(add_panier({ titre, images, prix, description }));
  };
  const deletee = () => {
    dispatch(delete_prod(categorieFound && categorieFound._id, el._id));
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div class="wrapper-card">
      {user && user.role == 0 ? (
        <div class="wrapper-card">
          <div class="container-card">
            <div
              class="top-card"
              style={{ background: `url(${el.images}) center no-repeat` }}
            ></div>
            <div class="bottom-card">
              <div class="left-card">
                <div class="details">
                  <h3 className="h3-card">{el.titre}</h3>
                  <p>{el.prix} dt</p>
                </div>
                <div class="buy">
                  <i class="material-icons" onClick={() => deletee()}>
                    delete
                  </i>
                </div>{" "}
                <div class="buy">
                  <i class="material-icons" onClick={handleShow}>
                    edit
                  </i>
                </div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{titre}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="nom catégorie"
                        value={titre}
                        onChange={(e) => setTitre(e.target.value)}
                      />
                      <br />{" "}
                      <Form.Control
                        type="text"
                        placeholder="image catégorie"
                        value={prix}
                        onChange={(e) => setPrix(e.target.value)}
                      />
                      <br />{" "}
                      <Form.Control
                        type="text"
                        placeholder="image catégorie"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <br />{" "}
                      <Form.Control
                        type="text"
                        placeholder="image catégorie"
                        value={images}
                        onChange={(e) => setImages(e.target.value)}
                      />
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={() => edit()}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div class="right">
                <div class="done">
                  <i class="material-icons">done</i>
                </div>
                <div class="details">
                  <h1>Chair</h1>
                  <p>Added to your cart</p>
                </div>
                <div class="remove">
                  <i class="material-icons">clear</i>
                </div>
              </div>
            </div>
          </div>
          <div class="inside">
            <div class="icon">
              <i class="material-icons">info_outline</i>
            </div>
            <div class="contents-card">{el.description}</div>
          </div>
        </div>
      ) : (
        <div class="wrapper-card">
          <div class="container-card">
            <div
              class="top-card"
              style={{ background: `url(${el.images}) center no-repeat` }}
            ></div>
            <div class="bottom-card">
              <div class="left-card">
                <div class="details">
                  <h3 className="h3-card">{el.titre}</h3>
                  <p>{el.prix} dt</p>
                </div>
                <div class="buy">
                  <i class="material-icons" onClick={ajout_panier}>
                    add_shopping_cart
                  </i>
                </div>{" "}
              </div>
              <div class="right">
                <div class="done">
                  <i class="material-icons">done</i>
                </div>
                <div class="details">
                  <h1>Chair</h1>
                  <p>Added to your cart</p>
                </div>
                <div class="remove">
                  <i class="material-icons">clear</i>
                </div>
              </div>
            </div>
          </div>
          <div class="inside">
            <div class="icon">
              <i class="material-icons">info_outline</i>
            </div>
            <div class="contents-card">{el.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProduitCard;
