import { Container, Row, Col } from "react-bootstrap";
import logoTentang from "../assets/img/logo/imgTentangKami.svg";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const TentangPage = () => {
  const teamMembers = [
    { name: "Andika Febriansyah", role: "Hustler - Mobile" },
    { name: "Ni Luh Putu Nestri", role: "Scrum Master - Web" },
    { name: "Seprianne Gabriela", role: "Hipster - Mobile" },
    { name: "Azizatul Fara Dibah", role: "Hipster - Mobile" },
    { name: "Hanna Titi", role: "Hipster - Web" },
    { name: "Zulfran Saputra", role: "Hipster - Web" },
    { name: "M. Ilham Saputra", role: "Hacker - Mobile" },
    { name: "Dhia Irsyad", role: "Hacker - Mobile" },
    { name: "Aji Lukito", role: "Hacker - Web" },
    { name: "Labib Nur Ali", role: "Hacker - Web" },
  ];

  return (
    <div className="tentangKami min-vh-100">
      <NavbarComponent />
      <Container>
        <Row>
          <Col className="hero">
            <img src={logoTentang} alt="" />
          </Col>
          <Col className="hero">
            <div className="descKami">
              <h1 className="fw-bold">About Us</h1>
              <p className="nama fw-bold">Welcome To GYM Storia</p>
              <p>
                Di GYM Storia, kami berkomitmen untuk membantu Anda menemukan
                tempat gym & fitness yang sempurna sesuai kebutuhan dan gaya
                hidup Anda. Kami memahami bahwa setiap individu memiliki tujuan
                kebugaran yang unik, dan itulah sebabnya kami hadir untuk
                memudahkan perjalanan Anda menuju hidup yang lebih sehat.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="titleTeam">
          <h1 className="fw-bold d-flex justify-content-center">Our Team</h1>
        </Row>
      </Container>
      <div className="ourTeam">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <p className="nama">{member.name}</p>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      <FooterComponent />
    </div>
  );
};

export default TentangPage;
