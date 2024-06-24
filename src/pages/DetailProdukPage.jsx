import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { reservasiGym } from "../data/index";
import iconPeta from "../assets/img/icon/peta.svg";
import iconKalender from "../assets/img/icon/kalender.svg";
import iconToilet from "../assets/img/icon/toilet.svg";
import iconjam from "../assets/img/icon/jam.svg";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const DetailProdukPage = () => {
  const { id } = useParams();
  const [gymDetail, setGymDetail] = useState(null);
  const [activeSection, setActiveSection] = useState("deskripsi");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const gym = reservasiGym.find((item) => item.id === parseInt(id));
    setGymDetail(gym);
  }, [id]);

  if (!gymDetail) {
    return <p>Loading...</p>;
  }

  return (
    <div className="detailProdukPage min-vh-100">
      <NavbarComponent />
      <header className="header">
        <Container>
          <Row>
            <Col>
              <h1>INFORMASI DETAIL</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Row>
          <Col>
            <div className="gym-detail">
              <img
                src={gymDetail.image}
                alt={gymDetail.title}
                className="main-image"
              />
              <div className="side-images">
                <img src={gymDetail.image} alt={gymDetail.title} />
                <img src={gymDetail.image} alt={gymDetail.title} />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="details">
              <h1 className="fw-bold mt-4">{gymDetail.title}</h1>
              <div className="icon-peta">
                <img src={iconPeta} alt="" />
                {gymDetail.alamat}
              </div>
              <div className="icon-row">
                <div className="icon-kalender">
                  <img src={iconKalender} alt="" />
                  {gymDetail.status}
                </div>
                <div className="icon-jam">
                  <img src={iconjam} alt="" />
                  {gymDetail.jam}
                </div>
              </div>
              <div className="icon-toilet">
                <img src={iconToilet} alt="" />
                {gymDetail.jarak}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="menu">
              <h2 onClick={() => handleSectionChange("deskripsi")}
              className={activeSection === "deskripsi" ? "active" : ""}
              >
                Deskripsi
              </h2>
              <h2 onClick={() => handleSectionChange("fasilitas")}
              className={activeSection === "fasilitas" ? "active" : ""}
              >
                Fasilitas
              </h2>
              <h2 onClick={() => handleSectionChange("galeri")}
              className={activeSection === "galeri" ? "active" : ""}
              >
                Galeri</h2>
              <h2 onClick={() => handleSectionChange("membership")}
              className={activeSection === "membership" ? "active" : ""}
              >
                Membership
              </h2>
            </div>
          </Col>
        </Row>
        {activeSection === "deskripsi" && (
          <Row>
            <Col>
              <div className="deskripsi">
                <img src={gymDetail.image} alt="" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fuga, labore? Ab voluptate error accusamus aliquam qui
                  similique sint rem modi, nobis vel voluptatum possimus quae,
                  beatae officia corrupti officiis pariatur illo! Animi aliquam
                  nemo ab quam. Tenetur id dolorum eius laborum eum facere quas
                  voluptatem sapiente magni. Et odio nemo iste molestiae
                  nesciunt quos dolorum ex animi consequatur. Officia, unde
                  quidem quae reprehenderit eos in expedita dolorem quod, ullam
                  voluptatibus ipsam sequi sit nobis impedit aut, ducimus magni.
                  Hic dolores nobis quos provident. Nihil soluta repudiandae,
                  reiciendis saepe in voluptatibus, eligendi ab vel fuga facilis
                  et, eaque a repellendus possimus.
                </p>
              </div>
            </Col>
          </Row>
        )}
        {activeSection === "fasilitas" && (
          <div>
            <Row>
              <Col>
                <div className="fasilitas">
                  <div className="table-header">
                    <h3>Nama Alat Gym</h3>
                    <h3>Jumlah (Unit)</h3>
                  </div>
                  <div className="table-content">
                    <div className="table-row">
                      <p>Speda Statis</p>
                      <p>20</p>
                    </div>
                    <div className="table-row">
                      <p>Speda Statis</p>
                      <p>20</p>
                    </div>
                    <div className="table-row">
                      <p>Speda Statis</p>
                      <p>20</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="cekRes">
                  <h4 className="cek">Cek Rating</h4>
                  <h4 className="res">Buat Reservasi</h4>
                </div>
              </Col>
            </Row>
          </div>
        )}
        {activeSection === "galeri" && (
          <Row>
            <Col>
              <div className="img-con">
                <div className="img-up">
                  <img src={gymDetail.image} alt="" className="img1" />
                  <div className="img-right">
                    <img src={gymDetail.image} alt="" className="img2" />
                    <img src={gymDetail.image} alt="" className="img3" />
                  </div>
                </div>
                <img src={gymDetail.image} alt="" className="img4" />
              </div>
            </Col>
          </Row>
        )}
        {activeSection === "membership" && (
          <Row>
            <Col>
              <div className="member">
                <h3>
                  Maaf,
                  <br />
                  Anda Belum Berlangganan
                </h3>
                <h4>Bergabung Sekarang</h4>
              </div>
            </Col>
          </Row>
        )}
      </Container>
      <FooterComponent/>
    </div>
  );
};

export default DetailProdukPage;
