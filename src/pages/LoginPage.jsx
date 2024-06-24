import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import iconFacebook from "../assets/img/icon/facebook.png";
import iconGoogle from "../assets/img/icon/google.png";
import heroLogin from "../assets/img/logo/herologin.png";
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      });
      localStorage.setItem('token', response.data.accessToken);
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        setMsg(error.response.data.msg);
      }
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="login">
      <div className="login-box">
        <button className="close-button" onClick={handleClose}>
          <FaTimes />
        </button>
        <Container>
          <Row>
            <Col md={6} className="left-col">
              <h2>Selamat Datang Di</h2>
              <h1>Gym Storia</h1>
              <img src={heroLogin} alt="Hero Login" />
            </Col>
            <Col md={6} className="right-col">
              <Form onSubmit={handleLogin}>
                <h3>Masuk</h3>
                {msg && <p className="text-danger">{msg}</p>}
                <Form.Group controlId="email" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="password" className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
                <p className="text-center mt-3">-----Atau masuk dengan-----</p>
                <div className="social-icons d-flex justify-content-center">
                  <img src={iconGoogle} alt="icongoogle" className="mx-2" />
                  <img src={iconFacebook} alt="iconfacebook" className="mx-2" />
                </div>
                <p className="text-center mt-3">
                  Belum punya akun? <a href="/register">Daftar</a>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <footer>Copyright © 2020. All rights reserved.</footer>
    </div>
  );
};

export default LoginPage;
