import React, { Component, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Carousel from "./component/Carousel/Carousel";
import Navbar from "./component/navbar/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Connexion from "./component/Connexion/Connexion";
import Inscription from "./component/Inscription/Inscription";
import Produits from "./component/Produits/Produits";
import EditProduit from "./component/EditProduit/EditProduit";
import { getAuthUser } from "./redux/actions/AuthActions";
import Profile from "./component/Profile/Profile";
import Acceuil from "./component/Acceuil/Acceuil";
import PrivateRoute from "./component/routes/PrivateRoute";
import ModifierInformations from "./component/Profile/InformationsPersonelles/ModifierInformations";
import { get_categories } from "../../client/src/redux/actions/CategorieActions";
import Panier from "./component/panier/Panier";
import PanierMap from "./component/panier/PanierMap";

function App() {
  const dispatch = useDispatch();
  const getUtilisateur = () => dispatch(getAuthUser());
  useEffect(() => {
    getUtilisateur();
    dispatch(get_categories());
  }, []);

  const user = useSelector((state) => state.authReducer.user);

  const categorie = useSelector((state) => state.CategorieReducer.categorie);
  const prod = useSelector((state) => state.CategorieReducer.categorie.prod);
  console.log(categorie && categorie.prod && categorie.prod.map((e) => e));
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Acceuil} />
          <Route path="/connexion" component={Connexion} />{" "}
          <Route path="/inscription" component={Inscription} />
          <Route path="/profile" component={Profile} />
          <Route path="/panier" component={PanierMap} />
          <Route
            path="/catégorie/:title"
            render={(props) => <Produits {...props} categorie={categorie} />}
          />{" "}
          <Route
            path="/Edit/:name"
            render={(props) => (
              <EditProduit {...props} categorie={categorie.prod} />
            )}
          />
          {console.log(categorie.map((el) => el.prod.map((e) => e.titre)))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
