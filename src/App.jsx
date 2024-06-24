import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import ReservasiPage from "./pages/ReservasiPage";
import ArtikelPage from "./pages/ArtikelPage";
import LoginPage from "./pages/LoginPage";
import MembershipPage from "./pages/MembershipPage";
import TentangPage from "./pages/TentangPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";
import KebijakanDataPage from "./pages/KebijakanDataPage";
import DetailProdukPage from "./pages/DetailProdukPage";
import RegisterPage from "./pages/RegisterPage";
import DetailArtikel from "./pages/DetailArtikel";

function App() {
  return (
    <div>
      {/* <NavbarComponent/> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/beranda" element={<HomePage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/reservasi" element={<ReservasiPage />} />
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/detailartikel" element={<DetailArtikel />} />
        <Route path="/tentangkami" element={<TentangPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/syarat&ketentuan" element={<SyaratKetentuanPage />} />
        <Route path="/kebijakandata" element={<KebijakanDataPage />} />
        <Route path="/detailproduk/:id" element={<DetailProdukPage />} /> {/* Add :id parameter */}
      </Routes>
    </div>
  );
}

export default App;
