import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import logo from "/logo.png";

const NavbarComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setName(decoded.name);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setName("");
    navigate("/");
  };

  const navigate = useNavigate();
  const loginClick = () => {
    navigate("/login");
  };
  const registerClick = () => {
    navigate("/register");
  };
  const [changeColor, setCangeColor] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setCangeColor(true);
    } else {
      setCangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      {" "}
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} width="120" height="50" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <Nav>
              {!isLoggedIn ? (
                <div>

                <div className="text-center">
                  <button
                    className="masuk btn btn-outline fw-bold"
                    onClick={loginClick}
                  >
                    Masuk
                  </button>
                </div>
                <div className="text-center">
                <button
                  className="daftar btn btn-outline rounded-3 bg-light fw-bold"
                  onClick={registerClick}
                >
                  Daftar
                </button>
              </div>
                </div>
              ) : (
                <>
                <Nav.Link as={NavLink} to="#">{`Hi, ${name}`}</Nav.Link>
                <Nav.Link as={NavLink} to="/" onClick={handleLogout}>Logout</Nav.Link>
              </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
