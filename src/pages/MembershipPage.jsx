import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

import logoGym from "/logo.png";
import kartu from "../assets/img/icon/kartu.png";
import user from "../assets/img/icon/user.png";
import jam from "../assets/img/icon/jam.png";
import thejade from "../assets/img/gym/thejade.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { kartuMember } from "../data";

const MembershipPage = () => {
  return (
    <div className="membershipPage min-vh-100">
      <NavbarComponent/>
      <Container>
        <Row>
          <Col className="">
            <div className="member">
              <div className="jenis">
                <img src={logoGym} alt="" />
                <h1 className="fw-bold">CLASSIC</h1>
              </div>
              <div className="anggota">
                <h1 className="">Muhammad Akbar</h1>
                <h1>TJG234923264</h1>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Informasi Keanggotaan</h1>
          </Col>
        </Row>
        <Row>
          <Col className="img-member">
            <div className="kartu">
              <img src={kartu} alt="" />
              <h3>No.Kartu</h3>
            </div>
            <div className="jam">
              <img src={jam} alt="" />
              <h3>Masa Aktif</h3>
            </div>
            <div className="user">
              <img src={user} alt="" />
              <h3>Jenis Keanggotaan</h3>
            </div>
          </Col>
          <Col className="isi-member">
            <h3>TJG234923264</h3>
            <h3>30/12/2025</h3>
            <h3>Classic</h3>
          </Col>
          <Col>
            <div className="img-gym">
              <img src={thejade} alt="" />
              <h3 className="fw-semibold">The Jade</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="fitur-member">
            <p>Perpanjang Keanggotaan</p>
            <p>Upgrade Keanggotaan</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Keanggotaan Lainnya</h1>
          </Col>
        </Row>
        <Row>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {kartuMember.map((kartu) => {
              return (
                <SwiperSlide>
                  <div className="img-kartu">
                    <div className="rating-kartu">
                      <FaStar />
                      <span className="mt-1">{kartu.rating} (456)</span>
                    </div>
                    <img src={kartu.image} alt="" />
                    <div className="deskripsi">
                      <h1 className="fw-semibold">{kartu.title}</h1>
                      <h5>{kartu.no}</h5>
                      <h5>{kartu.jenis}</h5>
                      <p>{kartu.batas}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </Container>
      <FooterComponent/>
    </div>
  );
};

export default MembershipPage;
