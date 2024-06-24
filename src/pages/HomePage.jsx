import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { tempatGym } from "../data/index";
import { FaStar } from "react-icons/fa";

import terdekatImg from "../assets/img/button/btnterdekat.svg";
import populerImg from "../assets/img/button/btnpopuler.svg";
import promoImg from "../assets/img/button/btnpromo.svg";
import buka24jamImg from "../assets/img/button/btnbuka24jam.svg";
import bannerDiskon from "../assets/img/banner/bannerDiskon.svg"
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const HomePage = () => {
  const [tempatDefault, setTempatDefault] = useState([]);
  const [filterGym, setFilterGym] = useState([]);
  const [activeFilter, setActiveFilter] = useState(""); // Pindahkan ke atas useEffect

  useEffect(() => {
    setFilterGym(tempatGym.slice(0, 6));
    setTempatDefault(tempatGym.slice(0, 6));
  }, []);

  const filterResult = (catGym) => {
    if (catGym === "all") {
      setFilterGym(tempatDefault);
      setActiveFilter(""); 
    } else {
      const result = tempatGym.filter((tempat) => tempat.category === catGym);
      setFilterGym(result.length ? result : tempatDefault);
      setActiveFilter(catGym);
    }
  };

  return (
    <div className="home ">
      <NavbarComponent />
      <header className="min-vh-100 w-100">
        <Container>
          <Row>
            <Col className="text-white ">
              <h1>Lokasi saya sekarang</h1>
              <p>Tasikmalaya, Jawa Barat</p>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="tempat min-vh-100 w-100">
        <Container>
          <Row>
            <Col>
              <img src={bannerDiskon} alt="banner image" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="fw-semibold">REKOMENDASI</h1>
            </Col>
          </Row>
          <Row className="fitur rounded-3">
            <Col>
              <div
                className={`filter-item ${
                  activeFilter === "terdekat" ? "active" : ""
                }`}
                onClick={() => filterResult("terdekat")}
              >
                <img src={terdekatImg} alt="terdekat" className="img-button" />
                <h2>Terdekat</h2>
              </div>
            </Col>
            <Col>
              <div
                className={`filter-item ${
                  activeFilter === "populer" ? "active" : ""
                }`}
                onClick={() => filterResult("populer")}
              >
                <img src={populerImg} alt="populer" className="img-button" />
                <h2>Populer</h2>
              </div>
            </Col>
            <Col>
              <div
                className={`filter-item ${
                  activeFilter === "promo" ? "active" : ""
                }`}
                onClick={() => filterResult("promo")}
              >
                <img src={promoImg} alt="promo" className="img-button" />
                <h2>Promo</h2>
              </div>
            </Col>
            <Col>
              <div
                className={`filter-item ${
                  activeFilter === "buka24jam" ? "active" : ""
                }`}
                onClick={() => filterResult("buka24jam")}
              >
                <img
                  src={buka24jamImg}
                  alt="buka24jam"
                  className="img-button"
                />
                <h2>Buka 24 Jam</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {filterGym.map((tempat) => {
              return (
                <Col key={tempat.id}>
                  <div className="image-wrapper">
                    <div className="ulas">
                      <FaStar className="star-icon text-yellow-400" />
                      <span className="rating-text">{tempat.rating}</span>
                    </div>
                    <img
                      src={tempat.image}
                      alt=""
                      className="image-with-shadow mb-3 rounded-top"
                    />
                  </div>

                  <h5 className="fw-semibold px-3">{tempat.title}</h5>
                  <p className="px-3">{tempat.alamat}</p>
                  <div className="ket px-3 d-flex justify-content-between align-items-center pb-3">
                    <p className="status">{tempat.status}</p>
                    <p className="fw-bold">{tempat.jarak}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </div>
  );
};

export default HomePage;
