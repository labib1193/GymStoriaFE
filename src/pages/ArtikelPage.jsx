import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaRegEye, FaRegHeart, FaRegCalendarAlt } from "react-icons/fa"; 
import joging from "../assets/img/artikel/joging.jpg";
import makanan from "../assets/img/artikel/makanan.jpg";
import gym1 from "../assets/img/artikel/gym1.jpg";
import gym2 from "../assets/img/artikel/gym2.jpg";
import sehat2 from "../assets/img/artikel/sehat2.jpg";
import gym3 from "../assets/img/artikel/gym3.jpg"
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const ArtikelPage = () => {
  return (
    <div className="artikel min-vh-100">
      <NavbarComponent/>
      <header className="header">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center text-white py-3">ARTIKEL</h1>
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
            <div className="image-text-container" style={{ display: "flex", alignItems: "center" }}>
              <div className="image" style={{ marginRight: "20px" }}>
                <img src={joging} alt="Jogging" style={{ width: "200px", height: "115px" }} />
              </div>
              <div className="text">
                <p>Walaupun naik turun tangga terlihat mudah, sesungguhnya hal lain yang dapat Anda lakukan secara rutin adalah berjalan kaki...</p>
                <a href="detailArtikel" className="text-primary">Read More</a>
              </div>
            </div>
          </article>
          <hr style={{ borderTop: "2px solid black" }} />
          <article className="mb-4">
            <h3 className="title">Menu Makanan Sehat untuk Energi Sehari-hari</h3>
            <p className="text-muted mb-1">
              <FaRegCalendarAlt /> Mei 08, 2024 - <FaRegEye /> 21k views - <FaRegHeart /> 372 likes - Category: Makanan Sehat
            </p>
            <hr style={{ borderTop: "2px solid black" }} />
            <div className="image-text-container" style={{ display: "flex", alignItems: "center" }}>
              <div className="image" style={{ marginRight: "20px" }}>
                <img src={makanan} alt="Healthy Food" style={{ width: "200px", height: "115px" }} />
              </div>
              <div className="text">
                <p>Penting untuk memastikan tubuh mendapatkan asupan nutrisi yang tepat untuk menjaga energi sepanjang hari...</p>
                <a href="#" className="text-primary">Read More</a>
              </div>
            </div>
          </article>
          <hr style={{ borderTop: "2px solid black" }} />
          <article className="mb-4">
            <h3 className="title">Menu Makanan Sehat untuk Energi Sehari-hari</h3>
            <p className="text-muted mb-1">
              <FaRegCalendarAlt /> Mei 08, 2024 - <FaRegEye /> 21k views - <FaRegHeart /> 372 likes - Category: Makanan Sehat
            </p>
            <hr style={{ borderTop: "2px solid black" }} />
            <div className="image-text-container" style={{ display: "flex", alignItems: "center" }}>
              <div className="image" style={{ marginRight: "20px" }}>
                <img src={makanan} alt="Healthy Food" style={{ width: "200px", height: "115px" }} />
              </div>
              <div className="text">
                <p>Penting untuk memastikan tubuh mendapatkan asupan nutrisi yang tepat untuk menjaga energi sepanjang hari...</p>
                <a href="#" className="text-primary">Read More</a>
              </div>
            </div>
          </article>
          <hr style={{ borderTop: "2px solid black" }} />
          <article>
            <h3 className="title">Menu Makanan Sehat untuk Energi Sehari-hari</h3>
            <p className="text-muted mb-1">
              <FaRegCalendarAlt /> Mei 08, 2024 - <FaRegEye /> 21k views - <FaRegHeart /> 372 likes - Category: Makanan Sehat
            </p>
            <hr style={{ borderTop: "2px solid black" }} />
            <div className="image-text-container" style={{ display: "flex", alignItems: "center" }}>
              <div className="image" style={{ marginRight: "20px" }}>
                <img src={makanan} alt="Healthy Food" style={{ width: "200px", height: "115px" }} />
              </div>
              <div className="text">
                <p>Penting untuk memastikan tubuh mendapatkan asupan nutrisi yang tepat untuk menjaga energi sepanjang hari...</p>
                <a href="#" className="text-primary">Read More</a>
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
            <li className="mb-4">
              <a href="#" className="align-items-center text-decoration-none text-dark">
                <div className="image" style={{ marginRight: "20px" }}>
                  <img src={sehat2} alt="Article 3" style={{ width: "200px", height: "115px" }} />
                </div>
                <div className="text">
                  <p className="mb-0" style={{ textAlign: "center" }}>Menu Makanan Sehat untuk Energi Sehari-hari</p>
                  <p className="text-muted mb-0" style={{ fontSize: "10px" }}>
                    <FaRegCalendarAlt /> Mei 08, 2024 - <FaRegEye /> 21k views - <FaRegHeart /> 372 likes
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="align-items-center text-decoration-none text-dark">
                <div className="image" style={{ marginRight: "20px" }}>
                  <img src={gym3} alt="Article 4" style={{ width: "200px", height: "115px" }} />
                </div>
                <div className="text">
                  <p className="mb-0" style={{textAlign:"center"}}>Olahraga Sehat Untuk Energi Sehari-hari</p>
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
  )
}

export default ArtikelPage