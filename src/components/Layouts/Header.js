import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

const Header = () => {
  const [nav, setNav] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="">
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to=" ">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to=" ">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to=" ">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <div className="cart" onClick={toggleCart}>
                  <i class="bi bi-bag fs-5"></i>
                  <em className="roundpoint">{totalQuantity}</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
