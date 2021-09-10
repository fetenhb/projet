import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuthUser, edit_user } from "../../../redux/actions/AuthActions";
import "../InformationsPersonelles/ModifierInformations.css";
const Adress = ({ user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUser());
  }, []);
  console.log(user && user.adress);
  const [adress, setAdress] = useState(user && user.adress);
  const [tel, setTel] = useState(user && user.tel);
  const [code_postal, setCode_postal] = useState(user && user.code_postal);
  const [ville, setVille] = useState(user && user.ville);
  const [gouvernorat, setGouvernorat] = useState(user && user.gouvernorat);

  const toggle = () => {
    setAdress(user && user.adress);
    setTel(user && user.tel);
    setCode_postal(user && user.code_postal);
    setVille(user && user.ville);
    setGouvernorat(user && user.gouvernorat);
  };
  console.log(user && user._id);
  const edit = () => {
    dispatch(
      edit_user(user && user._id, {
        adress,
        tel,
        code_postal,
        ville,
        gouvernorat,
      })
    );
    toggle();
  };
  return (
    <div>
      {" "}
      <section class="get-in-touch">
        <form class="contact-form row">
          <div class="form-field col-lg-6">
            <input
              id="name"
              class="input-text js-input"
              type="text"
              required
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
            <label class="label" for="name">
              Adresse
            </label>
          </div>
          <div class="form-field col-lg-6 ">
            <input
              id="email"
              class="input-text js-input"
              type="text"
              required
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
            <label class="label" for="email">
              Téléphone
            </label>
          </div>
          <div class="form-field col-lg-6 ">
            <input
              id="company"
              class="input-text js-input"
              type="text"
              required
              value={ville}
              onChange={(e) => setVille(e.target.value)}
            />
            <label class="label" for="company">
              Ville
            </label>
          </div>
          <div class="form-field col-lg-6 ">
            <input
              id="company"
              class="input-text js-input"
              type="text"
              required
              value={code_postal}
              onChange={(e) => setCode_postal(e.target.value)}
            />
            <label class="label" for="company">
              Code postal
            </label>
          </div>
          <div class="form-field col-lg-6 ">
            <select
              class="input-text js-input"
              aria-label=".form-select-sm example"
              onChange={(e) => setGouvernorat(e.target.value)}
            >
              <option selected>Gouvernorat</option>
              <option value="tunis">tunis</option>
              <option value="ben arous">ben arous</option>
              <option value="ariana">ariana</option>
              <option value="manouba">manouba</option>
              <option value="bizerte">bizerte</option>
              <option value="jandouba">jandouba</option>
              <option value="beja">beja</option>
              <option value="nabeul">nabeul</option>
              <option value="Kairouan">Kairouan</option>
              <option value="gabes">gabes</option>
              <option value="gafsa">gafsa</option>
              <option value="gbelli">gbelli</option>
              <option value="medenine">medenine</option>
              <option value="tataouin">tataouin</option>
              <option value="sfax">sfax</option>
              <option value="kef">kef</option>
              <option value="gasserine">gasserine</option>
              <option value="monastir">monastir</option>
              <option value="sidi bouzid">sidi bouzid</option>
              <option value="silliana">silliana</option>
              <option value="sousse">sousse</option>
              <option value="mahdia">mahdia</option>
              <option value="tozeur">tozeur</option>
              <option value="zaghouan">zaghouan</option>
            </select>
            <label class="label label-genre" for="phone">
              Gouvernorat
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

export default Adress;
