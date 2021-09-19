import React from "react";
import "../navbar/Navbar.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deconnexion } from "../../redux/actions/AuthActions";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navbarr = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const history = useHistory();

  const visiteurLinks = (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">
        <img src="logo.png" width="30px" height="30px"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <Nav.Link href="#deets">
            {" "}
            <Link
              to="/connexion"
              style={{ textDecoration: "none" }}
              className="Nav1Style"
            >
              <li style={{ width: "100px" }}>Connexion</li>
            </Link>
          </Nav.Link>
          {/* <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <nav class="navbar navbar-default navbar-fixed-top">
    //   <div class="container">
    //     <div class="navbar-header">
    //       <button
    //         type="button"
    //         class="navbar-toggle collapsed"
    //         data-toggle="collapse"
    //         data-target="#navbar"
    //         aria-expanded="false"
    //         aria-controls="navbar"
    //       >
    //         <span class="sr-only">Toggle navigation</span>
    //         <span class="icon-bar"></span>
    //         <span class="icon-bar"></span>
    //         <span class="icon-bar"></span>
    //       </button>
    //     </div>
    //     <div id="navbar" class="collapse navbar-collapse">
    //       <ul class="nav navbar-nav navbar-right">
    //         {" "}
    //         <ul
    //           class="navbar-nav  navbar-right "
    //           style={{
    //             listStyle: "none",
    //             display: "flex",
    //             justifyContent: "space-between",
    //           }}
    //         >
    //           <Link
    //             to="/connexion"
    //             style={{ textDecoration: "none" }}
    //             className="Nav1Style"
    //           >
    //             <li style={{ width: "100px" }}>Connexion</li>
    //           </Link>
    //           <Link
    //             to="/connexion"
    //             style={{ textDecoration: "none" }}
    //             className="Nav1Style"
    //           >
    //             <li style={{ width: "100px" }}>Panier</li>
    //           </Link>
    //         </ul>{" "}
    //         <li>
    //           <a href="#">Acceuil</a>
    //         </li>
    //         <li>
    //           <a href="#">A propos</a>
    //         </li>
    //         <li>
    //           <a href="#">Catégorie</a>
    //         </li>
    //         <li>
    //           <a href="#">Contact</a>
    //         </li>
    //         <li>
    //           <div class="search">
    //             <input type="text" class="searchTerm" />
    //             <button type="submit" class="searchButton">
    //               <i class="fa fa-search"></i>
    //             </button>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );

  const utilisateurLinks = (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">
        <img src="logo.png" width="30px" height="30px"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <Nav.Link href="#deets">
            {" "}
            <Link
              to="/profile"
              style={{ textDecoration: "none" }}
              className="Nav1Style"
            >
              <li style={{ width: "100px" }}>{user && user.nom}</li>
            </Link>
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <Link
              to="/panier"
              style={{ textDecoration: "none" }}
              className="Nav1Style"
            >
              {" "}
              panier{" "}
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  return <div>{isAuth ? utilisateurLinks : visiteurLinks}</div>;
};

export default Navbarr;
