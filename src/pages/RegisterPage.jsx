// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import iconFacebook from "../assets/img/icon/facebook.png";
// import iconGoogle from "../assets/img/icon/google.png";
// import heroLogin from "../assets/img/logo/herologin.png";
// import { FaTimes } from 'react-icons/fa';
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const RegisterPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confPassword, setConfPassword] = useState('');
//   const [msg, setMsg] = useState('');
//   const navigate = useNavigate();

//   const handleRegister  = async(e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/users', {
//         name: name,
//         email: email,
//         password:  password,
//         confPassword:  confPassword,
//       })
//       navigate("/login");
//     } catch (error) {
//       if(error.response){
//         console.log(error.response.data)
//         setMsg(error.response.data.msg)
//       }
//     }
//   }
        
//   const handleClose = () => {
//     navigate(-1);
//   };
  
//   return (
//     <div className="register">
//       <div className="register-box">
//         <button className="close-button" onClick={handleClose}>
//           <FaTimes />
//         </button>
//         <Container>
//           <Row>
//             <Col md={6} className="left-col">
//               <h2>Selamat Datang Di</h2>
//               <h1>Gym Storia</h1>
//               <img src={heroLogin} alt="" />
//             </Col>
//             <Col md={6} className="right-col">
//               <form>
//                 <h3>Daftar</h3>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter name"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Enter email"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Enter password"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Confirm password"
//                   />
//                 </div>
//                 <div className="d-grid">
//                   <button type="submit" className="btn btn-primary">
//                     Register
//                   </button>
//                 </div>
//                 <p>-----Atau daftar dengan-----</p>
//                 <div className="social-icons">
//                   <img src={iconGoogle} alt="icongoogle" />
//                   <img src={iconFacebook} alt="iconfacebook" />
//                 </div>
//                 <p>
//                   Sudah punya akun? <a href="/login">Masuk</a>
//                 </p>
//               </form>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <footer>Copyright © 2020. All rights reserved.</footer>
//     </div>
//   );
// };

// export default RegisterPage;

import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import iconFacebook from "../assets/img/icon/facebook.png";
import iconGoogle from "../assets/img/icon/google.png";
import heroLogin from "../assets/img/logo/herologin.png";
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleRegister  = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password:  password,
        confPassword:  confPassword,
      });
      navigate("/login");
    } catch (error) {
      if(error.response){
        console.log(error.response.data);
        setMsg(error.response.data.msg);
      }
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="register">
      <div className="register-box">
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
              <Form onSubmit={handleRegister}>
                <h3>Daftar</h3>
                {msg && <p className="text-danger">{msg}</p>}
                <Form.Group controlId="username" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
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
                <Form.Group controlId="confirmPassword" className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    required 
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Register
                </Button>
                <p className="text-center mt-3">-----Atau daftar dengan-----</p>
                <div className="social-icons d-flex justify-content-center">
                  <img src={iconGoogle} alt="icongoogle" className="mx-2" />
                  <img src={iconFacebook} alt="iconfacebook" className="mx-2" />
                </div>
                <p className="text-center mt-3">
                  Sudah punya akun? <a href="/login">Masuk</a>
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

export default RegisterPage;
