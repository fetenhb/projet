import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deconnexion, getAuthUser } from "../../redux/actions/AuthActions";

import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";

import anime from "animejs";

import "../Profile/Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ModifierInformations from "./InformationsPersonelles/ModifierInformations";
import Adress from "./Adresse/Adress";

const Profile = (props) => {
  // const userFound =
  //   props.user &&
  //   props.user.find((users) => users.nom == props.match.params.nom);
  // console.log(userFound);
  const user = useSelector((state) => state.authReducer.user);
  const { isLoading } = useSelector((state) => state.authReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(deconnexion());
    history.push("/");
  };
  useEffect(() => {
    document.body.className = "body-profile";
    var tm = { timelines: {} };
    tm.timelines["ml8"] = anime
      .timeline({ loop: true })
      .add({
        targets: ".ml8 .circle-white",
        scale: [0, 3],
        opacity: [1, 0],
        easing: "easeInOutExpo",
        rotateZ: 360,
        duration: 1100,
      })
      .add({
        targets: ".ml8 .circle-container",
        scale: [0, 1],
        duration: 1100,
        easing: "easeInOutExpo",
        offset: "-=1000",
      })
      .add({
        targets: ".ml8 .circle-dark",
        scale: [0, 1],
        duration: 1100,
        easing: "easeOutExpo",
        offset: "-=600",
      })
      .add({
        targets: ".ml8 .letters-left",
        scale: [0, 1],
        duration: 1200,
        offset: "-=550",
      })
      .add({
        targets: ".ml8 .bang",
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: "-=1000",
      })
      .add({
        targets: ".ml8",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1400,
      });

    anime({
      targets: ".ml8 .circle-dark-dashed",
      rotateZ: 360,
      duration: 8000,
      easing: "linear",
      loop: true,
    });
  }, []);

  const [informations, setInfomations] = useState(false);
  const [adresse, setAdresse] = useState(false);
  const handleInformations = () => {
    setInfomations(!informations);
    setAdresse(false);
  };
  const handleAdresse = () => {
    setAdresse(!adresse);
    setInfomations(false);
  };
  console.log(informations);
  // if (!user) {
  //   return (
  //     <div class="spinner-border text-secondary" role="status">
  //       <span class="visually-hidden">Loading...</span>
  //     </div>
  //   );
  // }
  return (
    <div>
      {console.log(user)}
      <Navbar />
      <div className="backProfile" style={{ height: "600px" }}>
        <div class="moving-letters">
          <h1 class="ml8">
            <span class="letters-container">
              <span class="letters letters-left" style={{ fontSize: "50px" }}>
                bienvenue <br />
                <br />
                {user && user.prenom}
              </span>
            </span>
            <span class="circle circle-white"></span>
            <span class="circle circle-dark"></span>
            <span class="circle circle-container">
              <span class="circle circle-dark-dashed"></span>
            </span>
          </h1>
        </div>
      </div>
      <div
        class="container-fluid compte  container-sm"
        style={{ width: "1100px" }}
      >
        <div class="row">
          <div class="col-md-4">
            <div class="container-list">
              <div class="card-list">
                <div class="body">
                  <ul>
                    <li>
                      <i className="fas fa-home icon"></i> Votre compte
                    </li>
                    <li>
                      <i className="fas fa-shopping-bag icon"></i> Vos commandes
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt icon"></i> Vos avis
                    </li>
                    <li>
                      <i className="fas fa-heart icon"></i> Vos favories
                    </li>
                    <li onClick={logoutUser}>
                      <i className="fas fa-sign-out-alt"></i> Déconnexion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            {informations ? (
              <div class="card-pro">
                <div
                  class="card-header"
                  style={{
                    fontSize: "25px",
                    textAlign: "left",
                    color: "black",
                    fontWeight: "600",
                    height: "50px",
                  }}
                >
                  Votre compte
                </div>
                <div class="card-body">
                  <div class="row">
                    <ModifierInformations user={user} />
                  </div>
                </div>
              </div>
            ) : adresse ? (
              <div class="card-pro">
                <div
                  class="card-header"
                  style={{
                    fontSize: "25px",
                    textAlign: "left",
                    color: "black",
                    fontWeight: "600",
                    height: "50px",
                  }}
                >
                  Votre compte
                </div>
                <div class="card-body">
                  <div class="row">
                    <Adress user={user} />
                  </div>
                </div>
              </div>
            ) : (
              <div class="card-pro">
                <div
                  class="card-header"
                  style={{
                    fontSize: "25px",
                    textAlign: "left",
                    color: "black",
                    fontWeight: "600",
                    height: "50px",
                  }}
                >
                  Votre compte
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="card-pro">
                        <div
                          class="card-header"
                          style={{
                            background: "transparent",
                            fontSize: "16px",
                            color: "black",
                            textAlign: "left",
                            display: "inline-flex",
                            justifyContent: "space-between",
                            marginTop: "10px",
                            paddingBottom: "15px",
                          }}
                        >
                          <div> INFORMATIONS PERSONNELLES </div>

                          <svg
                            viewBox="0 0 24 24"
                            class="ic"
                            width="24"
                            height="24"
                            onClick={() => handleInformations()}
                          >
                            <svg viewBox="0 0 24 24" fill="#ff899fe1" id="edit">
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                              <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                          </svg>
                        </div>
                        <div
                          class="card-body"
                          style={{
                            fontSize: "14px",
                            color: "black",
                            textAlign: "left",
                            marginLeft: "20px",
                          }}
                        >
                          <p>{`${user && user.prenom + " " + user.nom} `}</p>
                          <p>{`${user && user.email} `}</p>
                        </div>{" "}
                        <footer
                          style={{ alignItems: "flex-start" }}
                          className="btn-mod-mdp"
                        >
                          {" "}
                          <div style={{ margin: "10px" }}>
                            {" "}
                            MODIFIER VOTRE MOT DE PASSE
                          </div>
                        </footer>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card-pro">
                        <div
                          class="card-header"
                          style={{
                            background: "transparent",
                            fontSize: "16px",
                            color: "black",
                            textAlign: "left",
                            display: "inline-flex",
                            justifyContent: "space-between",
                            marginTop: "10px",
                            paddingBottom: "15px",
                          }}
                        >
                          <div> ADRESSES</div>{" "}
                          <svg
                            viewBox="0 0 24 24"
                            class="ic"
                            width="24"
                            height="24"
                            onClick={() => handleAdresse()}
                          >
                            <svg viewBox="0 0 24 24" fill="#ff899fe1" id="edit">
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                              <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                          </svg>
                          {
                            (console.log("informations", informations),
                            console.log("adresse", adresse))
                          }
                        </div>
                        <div
                          class="card-body"
                          style={{
                            fontSize: "14px",
                            color: "black",
                            textAlign: "left",
                            marginLeft: "20px",
                          }}
                        >
                          <p>Adresse par défaut :</p>
                          <p>{`${
                            user && user.adress
                              ? user &&
                                user.adress +
                                  ` , ${
                                    user && user.ville
                                      ? user && user.ville
                                      : " "
                                  } `
                              : " "
                          } `}</p>
                          <p>{`${
                            user && user.gouvernorat
                              ? user &&
                                user.gouvernorat +
                                  ` , ${
                                    user && user.code_postal
                                      ? user && user.code_postal
                                      : " "
                                  } `
                              : " "
                          } `}</p>{" "}
                          <p>{`${
                            user && user.tel ? user && user.tel : " "
                          } `}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <Footer />
    </div>
  );
};

export default Profile;
