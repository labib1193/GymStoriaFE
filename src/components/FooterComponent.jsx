import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "/logo.png";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col>
            <img src={logo} className="mb-3" width="120" height="50" alt="" />
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Fuga delectus saepe vel qui tempore tempora laboriosam pariatur
              perspiciatis sint fugiat.
            </p>
          </Col>
          <Col></Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="text-decoration-none fw-bold">Perusahaan</h5>
            <Link className="text-decoration-none" to="/tentangkami">
              Tentang Kami
            </Link>
            <Link className="text-decoration-none" to="/syarat&ketentuan">
              Syarat & Ketentuan
            </Link>
            <Link className="text-decoration-none" to="/kebijakandata">
              Kebijakan Data
            </Link>
          </Col>
          <Col>
            <h5 className="fw-bold mb-3">Hubungi Kami</h5>
            <a href="">pencariangym@gmail.com</a>
            <p className="mt-2">+62 8525 2429 382</p>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col>
            <p className="px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">GymStoria</span>, All Right Reserved
            </p>
          </Col>
          <Col lg="3" className="sosial">
            <div className="social">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
