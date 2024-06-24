import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png";
import app from "../assets/img/banner/mobileapp.svg";
import googleplay from "../assets/img/button/google-play.svg";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";


const LandingPage = () => {
  const navigate = useNavigate();
  const getStarted = () => {
    navigate("/beranda");
  };

  return (
    <div className="landingpage">
      <NavbarComponent/>
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4 ">
                Cari Gym & Fitnes Terdekat <br /> Dengan Lokasi Anda Sekarang
              </h1>
              <p className="mb-4">
                Selamat datang di platform pencarian gym dan fitness GYM Storia!
                Temukan tempat gym yang sempurna sesuai kebutuhan Anda dengan
                mudah. Jelajahi berbagai pilihan tempat fitness terdekat,
                populer, dan yang menawarkan promo menarik. Kami membantu Anda
                menemukan gym yang buka 24 jam untuk kenyamanan Anda.
              </p>
              <button
                className="btn btn-light btn-lg rounded-3 mb-xs-0 mb-2 fw-bold"
                onClick={getStarted}
              >
                Get Started Now
              </button>
              <div className="social">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <a href="https://play.google.com/store/games?hl=en&gl=US" target="_blank" className="btn btn-playstore">
                <img src={googleplay} alt="Google Play" />
            </a>
            </div>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={logo} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="mobile w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="app-box d-flex align-items-center">
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={app} alt="app-img" />
            </Col>
            <Col className="bg">
              <h4>
                Atau Cari tempat GYM & Fitnes terdekat dengan lokasi anda
                sekarang hanya dengan ketukan jari menggunakan Aplikasi kami di
                Play Store.
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent/>
    </div>
  );
};

export default LandingPage;
