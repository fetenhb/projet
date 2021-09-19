import React, { useEffect } from "react";
import { get_panier, get_totalPanier } from "../../redux/actions/PanierActions";
import Panier from "./Panier";
import { useDispatch, useSelector } from "react-redux";
const PanierMap = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_panier());
    dispatch(get_totalPanier());
  }, []);
  const panier = useSelector((state) => state.PanierReducer.panier);
  const total = useSelector((state) => state.PanierReducer.total);

  // console.log("totallllllll user", total && total.utilisateurId);
  // console.log("panierrrrrrr user", panier && panier.utilisateurId);
  const tot = () => {
    let i = 0;
    panier && panier.map((el) => (i += el.prix * el.quantite));
    console.log("paniertot", panier && panier);
    console.log("tot", i);
    return i;
  };
  return (
    <div>
      {" "}
      <div class="shopping-cart">
        <div class="title">Shopping Cart</div>

        {panier &&
          panier.map &&
          panier.map((pan, i) => (
            <Panier tot={() => tot()} pan={pan} key={i} />
          ))}
        <div class="totalPrice">
          <div>
            <span> Total : </span>
            <span id="total">
              {" "}
              {total && total.map && total.map((e) => e.totalPanier)}{" "}
            </span>
            <span> $ </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanierMap;
