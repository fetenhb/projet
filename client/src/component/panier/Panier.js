import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Panier.css";
import plus from "./plus.svg";
import minus from "./minus.svg";
import {
  delete_panier,
  edit_panier,
  incrementQuantie,
} from "../../redux/actions/PanierActions";

const Panier = ({ pan }) => {
  console.log("panier", pan && pan);

  useEffect(() => {
    document.body.className = "body_panier";
    // like
    let likeBtn = document.querySelectorAll(".like-btn");
    for (let i = 0; i < likeBtn.length; i++) {
      likeBtn[i].addEventListener("click", function () {
        likeBtn[i].classList.toggle("is-active");
      });
    }
  }, []);

  const [quantite, setQuantite] = useState(pan.quantite);
  const dispatch = useDispatch();

  const deletePanier = () => {
    dispatch(delete_panier(pan._id));
  };
  //   console.log("quant", quantite);

  const plus_quantite = async () => {
    console.log("quantitee", quantite);
    let x = quantite;
    x++;
    console.log("x", x);
    await setQuantite(x);
    console.log("quantite 2", quantite);
    dispatch(
      edit_panier(pan._id, {
        quantite,
      })
    );
    console.log("pannnn", pan && pan);
  };
  const moins_quantite = () => {
    let y = quantite;
    y--;
    setQuantite(y);
    dispatch(
      edit_panier(pan._id, {
        quantite,
      })
    );
  };
  return (
    <div>
      <div class="item">
        <div class="buttons">
          <span class="delete-btn" onClick={() => deletePanier()}></span>
          <span class="like-btn"></span>
        </div>

        <div class="image">
          <img src={pan && pan.images} width="50px" height="50px" />
        </div>

        <div class="description">
          <span>{pan && pan.titre}</span>

          <span>{pan && pan.description}</span>
        </div>

        <div class="quantity">
          <button
            class="plus-btn"
            type="button"
            name="button"
            onClick={() => plus_quantite()}
          >
            <img src={plus} alt="" />
          </button>
          <input type="text" name="name" value={quantite} class="quan" />
          <button
            class="minus-btn"
            type="button"
            name="button"
            onClick={() => moins_quantite()}
          >
            <img src={minus} alt="" />
          </button>
        </div>
        {console.log({ quantite })}
        <div class="prx">
          $<span class="price"> {pan.prix}</span>
        </div>
      </div>
    </div>
  );
};

export default Panier;
