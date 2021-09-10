import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../EditProduit/EditProduit.css";
import "../EditProduit/js/main";
import img from "../../img/form.png";
import { inscription } from "../../redux/actions/AuthActions";
import $ from "jquery";
const EditProduit = ({ el }) => {
  console.log("el", el);
  useEffect(() => {
    document.body.className = "body-ConnexionInscription";
    $(function () {
      $(".form-holder").delegate("input", "focus", function () {
        $(".form-holder").removeClass("activee");
        $(this).parent().addClass("activee");
      });
    });
  }, []);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [mot_de_passe, setMot_de_passe] = useState("");

  const dispatch = useDispatch();
  const handleInscription = (e) => {
    e.preventDefault();
    dispatch(inscription({ nom, prenom, email, mot_de_passe }));
  };

  return (
    <div>
      <div class="wrapper">
        <div class="inner">
          <div class="image-holder">
            <img src={img} alt="" width="550px" height="590px" />
          </div>
          <form action="" className="form-edit">
            <h3 className="editProd-style">Sign Up</h3>
            <div class="form-holder activee">
              <input
                type="text"
                placeholder="nom"
                class="form-controll"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>{" "}
            <div class="form-holder ">
              <input
                type="text"
                placeholder="prénom"
                class="form-controll"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>
            <div class="form-holder">
              <input
                type="text"
                placeholder="e-mail"
                class="form-controll"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-holder">
              <input
                type="password"
                placeholder="Mot de passe"
                class="form-controll"
                style={{ fontSize: "15px" }}
                value={mot_de_passe}
                onChange={(e) => setMot_de_passe(e.target.value)}
              />
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" checked /> I agree all statement in{" "}
                <a href="#">Terms & Conditions</a>
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="form-login">
              <button className="button-sign insc" onClick={handleInscription}>
                Sign up
              </button>

              <p>
                Already Have account? <a href="#">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduit;
