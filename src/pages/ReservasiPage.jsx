import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import { FaStar, FaChevronDown } from "react-icons/fa";
import { reservasiGym } from "../data/index";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bannerImg from "../assets/img/banner/banner.svg";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const ReservasiPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(reservasiGym);
  const [noResults, setNoResults] = useState(false);
  const [totalItems, setTotalItems] = useState(reservasiGym.length);
  const [filter, setFilter] = useState("Terdekat");
  const itemsPerPage = 5;

  useEffect(() => {
    setTotalItems(reservasiGym.length);
  }, [reservasiGym]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSearch = () => {
    const results = reservasiGym.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
    setNoResults(results.length === 0);
    setCurrentPage(1);
  };

  useEffect(() => {
    setTotalItems(filteredItems.length);
  }, [filteredItems]);

  const handleFilterChange = (filterOption) => {
    setFilter(filterOption);
    // Apply sorting/filtering logic based on the selected filter
    const sortedItems = [...reservasiGym].filter(item => {
      if (filterOption === "Terdekat") {
        return item.kategori === "Terdekat";
      } else if (filterOption === "Populer") {
        return item.kategori === "Populer";
      } else if (filterOption === "Promo") {
        return item.kategori === "Promo";
      } else if (filterOption === "Buka 24 Jam") {
        return item.kategori === "Buka 24 Jam";
      }
      return true; 
    });
    setFilteredItems(sortedItems);
  };

  return (
    <div className="reservasiPage min-vh-100">
      <NavbarComponent />
      <header className="header">
        <Container>
          <Row>
            <Col>
              <h1>RESERVASI</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <div>
        <Container>
          <Row>
            <Col>
              <div className="search-bar">
                <Form.Control
                  type="text"
                  placeholder="Cari tempat gym berdasarkan nama"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="primary" onClick={handleSearch}>
                  Cari
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="garis"></Row>
          <Row className="align-items-center">
            <Col>
              <p className="product-count">
                Menampilkan: {totalItems} tempat gym tersedia
              </p>
            </Col>
            <Col className="text text-end">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Urutkan berdasarkan: {filter} <FaChevronDown />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleFilterChange("Terdekat")}>
                    Terdekat
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFilterChange("Populer")}>
                    Populer
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFilterChange("Promo")}>
                    Promo
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFilterChange("Buka 24 Jam")}>
                    Buka 24 Jam
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row className="banner">
            <img src={bannerImg} alt="" />
          </Row>
          {noResults ? (
            <Row>
              <Col>
                <p className="no-results fw-semibold">
                  "Tidak menemukan hasil"
                </p>
              </Col>
            </Row>
          ) : (
            <>
              <Row>
                {currentItems.map((data) => (
                  <Col key={data.id}>
                    <Link to={`/detailproduk/${data.id}`}
                    className="text-decoration-none text-dark"
                    >
                    <div className="tempat-gym">
                      <div className="rating">
                        <FaStar />
                        <span>{data.rating}</span>
                      </div>
                      <img src={data.image} alt="" />
                      <div className="deskripsi">
                        <h1>{data.title}</h1>
                        <h4>{data.jam}</h4>
                        <h5>{data.alamat}</h5>
                        <div className="ket">
                          <p className="status">{data.status}</p>
                          <p className="fw-bold">{data.jarak}</p>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </Col>
                ))}
              </Row>
              <Row className="button-slide">
                <Col className="d-flex justify-content-between">
                  <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                  </button>
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ReservasiPage;

