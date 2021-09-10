import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuthUser, edit_user } from "../../../redux/actions/AuthActions";
import "./ModifierInformations.css";
const ModifierInformations = ({ user }) => {
  console.log(user);
  // const userFound =
  //   props.user &&
  //   props.user.find((users) => users.nom == props.match.params.nom);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUser());
  }, []);
  console.log(user && user.nom);
  const [nom, setNom] = useState(user && user.nom);
  const [prenom, setPrenom] = useState(user && user.prenom);
  const [sexe, setSexe] = useState(user && user.sexe);
  const [email, setEmail] = useState(user && user.email);

  const toggle = () => {
    setNom(user && user.nom);
    setPrenom(user && user.prenom);
    setSexe(user && user.sexe);
  };
  console.log(user && user._id);
  const edit = () => {
    dispatch(
      edit_user(user && user._id, {
        nom,
        prenom,
        sexe,
      })
    );
    toggle();
  };
  return (
    <div>
      <section class="get-in-touch">
        <form class="contact-form row">
          <div class="form-field col-lg-6">
            <input
              id="name"
              class="input-text js-input"
              type="text"
              required
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
            <label class="label" for="name">
              Nom
            </label>
          </div>
          <div class="form-field col-lg-6 ">
            <input
              id="email"
              class="input-text js-input"
              type="text"
              required
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
            <label class="label" for="email">
              Prénom
            </label>
          </div>
          <div class="form-field col-lg-6 ">
            <input
              id="company"
              class="input-text js-input"
              type="email"
              required
              value={user && user.email}
            />
            <label class="label" for="company">
              Email
            </label>
          </div>
          <div class="form-field col-lg-6 ">
            <select
              class="input-text js-input"
              aria-label=".form-select-sm example"
              onChange={(e) => setSexe(e.target.value)}
            >
              <option selected>Open this select menu</option>
              <option value="femme">femme</option>
              <option value="homme">homme</option>
            </select>
            {console.log("ggg", sexe)}
            <label class="label label-genre" for="phone">
              Genre (optionnel)
            </label>
          </div>

          <div class="form-field col-lg-12">
            <input
              class="submit-btn"
              type="submit"
              value="Submit"
              onClick={edit}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default ModifierInformations;
