import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";

import { Link } from "react-router-dom";
import {
  delete_categorie,
  edit_categorie,
  get_categories,
} from "../../redux/actions/CategorieActions";
import "./CategorieCard.css";
const CategorieCard = ({ cat }) => {
  const [nom, setNom] = useState(cat.nom);
  const [image, setImage] = useState(cat.image);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const edit = () => {
    dispatch(
      edit_categorie(cat._id, {
        nom,
        image,
      })
    );
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deletee = () => {
    dispatch(delete_categorie(cat._id));
  };
  return (
    <div>
      {user && user.role == 0 ? (
        <div>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
          />
          {/* <Link to={`/catégorie/${cat.nom}`}> */}{" "}
          <div class="card">
            {" "}
            <div
              class="card__background"
              style={{ backgroundImage: `url(${cat.image})` }}
            ></div>{" "}
            <div class="card__content">
              <p class="card__category">Categorie</p>

              <h3 class="card__heading">{cat.nom}</h3>
            </div>{" "}
            <div class="card__content">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "250px",
                }}
              >
                {" "}
                <div class="container">
                  <i class="fa fa-pencil iconn" onClick={handleShow}></i>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>{nom}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="nom catégorie"
                          value={nom}
                          onChange={(e) => setNom(e.target.value)}
                        />
                        <br />{" "}
                        <Form.Control
                          type="text"
                          placeholder="image catégorie"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={edit}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <i
                  class="fa fa-trash-o iconn margin-icon"
                  onClick={() => deletee()}
                ></i>
              </div>
            </div>{" "}
          </div>{" "}
          {/* </Link>{" "} */}
        </div>
      ) : (
        <div>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
          />
          <Link to={`/catégorie/${cat.nom}`}>
            <a class="card" href="#">
              {" "}
              <div
                class="card__background"
                style={{ backgroundImage: `url(${cat.image})` }}
              ></div>{" "}
              <div class="card__content">
                <p class="card__category">Categorie</p>
                <h3 class="card__heading">{cat.nom}</h3>{" "}
              </div>{" "}
            </a>{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default CategorieCard;
