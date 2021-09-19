import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Panier.css";
import plus from "./plus.svg";
import minus from "./minus.svg";
import {
  delete_panier,
  edit_panier,
  get_totalPanier,
} from "../../redux/actions/PanierActions";
import { total_panier } from "../../redux/actions/TotPanierActions";

const Panier = ({ pan, tot }) => {
  //   console.log("panier", pan && pan);

  useEffect(() => {
    // document.body.className = "body_panier";
    // like
    // let likeBtn = document.querySelectorAll(".like-btn");
    // for (let i = 0; i < likeBtn.length; i++) {
    //   likeBtn[i].addEventListener("click", function () {
    //     likeBtn[i].classList.toggle("is-active");
    //   });
    // }
  }, []);
  console.log("panierrrr user", pan && pan.utilisateurId);

  const [quantite, setQuantite] = useState(pan.quantite);
  const [totalPanier, setTot] = useState(tot());

  const dispatch = useDispatch();
  console.log("tottttttttttttttt,", totalPanier);
  const deletePanier = () => {
    dispatch(delete_panier(pan._id));
  };
  //   console.log("quant", quantite);

  const plus_quantite = async () => {
    setTot(tot());

    dispatch(total_panier({ totalPanier }));
    let x = quantite;
    x++;
    setQuantite(x);
    dispatch(edit_panier(pan._id, { quantite }));
    setTot(tot());
    dispatch(total_panier({ totalPanier }));

    console.log("quantitee", quantite);
    console.log("pannnn", pan && pan);
  };
  const moins_quantite = () => {
    let y = quantite;
    y--;
    setQuantite(y);
    dispatch(edit_panier(pan._id, { quantite }));
    setTot(tot());
    dispatch(total_panier({ totalPanier }));
  };
  //   console.log("quantittttee", quantite);
  return (
    <div>
      <div class="item">
        <div class="buttons">
          <span class="delete-btn" onClick={() => deletePanier()}></span>
          <span class="like-btn"></span>
        </div>

        <div class="image">
          <img src={pan && pan.images} width="200px" height="100px" />
        </div>

        <div class="description">
          <span>{pan && pan.titre}</span>
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
