import React, { useEffect } from "react";
import { get_panier } from "../../redux/actions/PanierActions";
import Panier from "./Panier";
import { useDispatch, useSelector } from "react-redux";
const PanierMap = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_panier());
  }, []);
  const panier = useSelector((state) => state.PanierReducer.panier);
  console.log("panierrrr", panier);
  return (
    <div>
      {" "}
      <div class="shopping-cart">
        <div class="title">Shopping Cart</div>

        {panier &&
          panier.map &&
          panier.map((pan, i) => <Panier pan={pan} key={i} />)}
        <div class="totalPrice">
          <div>
            <span> Total : </span>
            <span id="total"> {panier && panier.totalPanier} </span>
            <span> $ </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanierMap;
