import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../Connexion/Connexion.css";
import "../Connexion/js/main";
import img from "../../img/form.png";
import { connexion } from "../../redux/actions/AuthActions";
import { useHistory, Link } from "react-router-dom";
import $ from "jquery";
const Connexion = () => {
  useEffect(() => {
    document.body.className = "body-ConnexionInscription";
    $(function () {
      $(".form-holder").delegate("input", "focus", function () {
        $(".form-holder").removeClass("activee");
        $(this).parent().addClass("activee");
      });
    });
  }, []);
  const [email, setEmail] = useState("");
  const [mot_de_passe, setMot_de_passe] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const handleConnexion = (e) => {
    e.preventDefault();
    dispatch(connexion({ email, mot_de_passe }));
    history.push("/");
  };

  return (
    <div>
      <div class="wrapper">
        <div class="inner">
          <form action="" className="form-register-cnx">
            <h3 className="cnx-style">Connexion</h3>
            <div class="form-holder activee">
              <input
                type="text"
                placeholder="e-mail"
                class="form-controll-cnx"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-holder">
              <input
                type="password"
                placeholder="Mot de passe"
                class="form-controll-cnx"
                style={{ fontSize: "15px" }}
                value={mot_de_passe}
                onChange={(e) => setMot_de_passe(e.target.value)}
              />
            </div>
            <div>
              <div class="form-connexion" style={{ paddingLeft: "100px" }}>
                <button className="button-sign cnx" onClick={handleConnexion}>
                  Connexion
                </button>
              </div>
              <div style={{ marginTop: "30px" }}>
                <p>
                  vous n'avez pas d'un compte?{" "}
                  <Link to="/inscription" style={{ textDecoration: "none" }}>
                    <a href="#">Inscription</a>
                  </Link>
                </p>
              </div>
            </div>
          </form>
          <div class="image-holder">
            <img src={img} alt="" width="550px" height="590px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
