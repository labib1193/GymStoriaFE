import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegEye, FaRegHeart, FaRegCalendarAlt } from "react-icons/fa"; // Import necessary icons
import joging from "../assets/img/artikel/joging.jpg";
import gym1 from "../assets/img/artikel/gym1.jpg";
import gym2 from "../assets/img/artikel/gym2.jpg";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

const DetailArtikel = () => {
  return (
    <div className="DetailArtikel min-vh-100">
        <NavbarComponent/>
      <header className="header">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center text-white py-3">DETAIL ARTIKEL</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <Container className="d-flex mt-5">
        <Container style={{ flex: 2, margin: "30px", border: "solid", padding: "20px", borderWidth: "2px", borderRadius: "10px", borderColor: "Grey" }}>
          <article className="mb-4">
            <h3 className="title">Naik Turun Tangga dan Berjalan Kaki</h3>
            <p className="text-muted mb-1">
              <FaRegCalendarAlt /> Mei 08, 2024 - <FaRegEye /> 21k views - <FaRegHeart /> 372 likes - Category: Gaya Hidup
            </p>
            <hr style={{ borderTop: "2px solid black" }} />
            <div className="image-text-container">
              <div className="image" style={{ float: "left", marginRight: "20px" }}>
                <img src={joging} alt="Jogging" style={{ width: "300px", height: "200px" }} />
              </div>
              <div className="text">
                <p>
                  Walaupun naik turun tangga terlihat mudah, sesungguhnya hal lain yang dapat Anda lakukan secara rutin adalah berjalan kaki. Untuk mendapatkan manfaat gaya hidup sehat dan aktif dari berjalan kaki, Anda bisa meluangkan setidaknya 30 menit dari waktu Anda setiap hari untuk berjalan cepat. Dilansir dari situs Very Well Fit, ada empat hal yang harus diperhatikan dalam olahraga jalan kaki, yaitu postur tubuh, ayunan atau gerakan lengan, gerakan kaki serta dorongan kaki. Postur tubuh saat olahraga jalan kaki haruslah tepat karena bila tidak, tubuh bisa mengalami cedera atau nyeri pada bagian tubuh tertentu. Menurut The American Academy of Orthopaedic Surgeons, saat berjalan ayunkan lengan, pandangan lurus ke depan dan jaga tulang punggung Anda tetap lurus agar seluruh tubuh juga ikut bergerak. Sama seperti naik turun tangga, dengan berjalan, berarti Anda menopang berat badan diri sendiri, maka itu aktivitas Ini dikenal sebagai latihan menahan beban.
                </p>
              </div>
            </div>
          </article>
        </Container>
        <Container style={{ width: "250px", margin: "30px", border: "solid", padding: "20px", borderWidth: "2px", borderRadius: "10px", borderColor: "Grey" }}>
          <h3 className="title text-white py-2" style={{ backgroundColor: "#8A2BE2", fontSize: "20px", textAlign: "center" }}>LATEST ARTIKEL</h3>
          <ul className="list-unstyled">
            <li className="mb-4">
              <a href="#" className="align-items-center text-decoration-none text-dark">
                <div className="image" style={{ marginRight: "20px" }}>
                  <img src={gym1} alt="Article 1" style={{ width: "200px", height: "115px" }} />
                </div>
                <div className="text">
                  <p className="mb-0" style={{ textAlign: "center" }}>Atur Jadwal Latihan yang Konsisten</p>
                  <p className="text-muted mb-0" style={{ fontSize: "10px" }}>
                    <FaRegCalendarAlt /> Mei 08, 2024 - <FaRegEye /> 21k views - <FaRegHeart /> 372 likes
                  </p>
                </div>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="align-items-center text-decoration-none text-dark">
                <div className="image" style={{ marginRight: "20px" }}>
                  <img src={gym2} alt="Article 2" style={{ width: "200px", height: "115px" }} />
                </div>
                <div className="text">
                  <p className="mb-0" style={{ textAlign: "center" }}>Tingkatkan Intensitas secara Bertahap</p>
                  <p className="text-muted mb-0" style={{ fontSize: "10px" }}>
                    <FaRegCalendarAlt /> Mei 08, 2024 - <FaRegEye /> 21k views - <FaRegHeart /> 372 likes
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </Container>
      </Container>
      <FooterComponent/>
    </div>
  );
};

export default DetailArtikel;
