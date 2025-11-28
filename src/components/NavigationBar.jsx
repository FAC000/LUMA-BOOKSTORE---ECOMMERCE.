import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { IconCart } from './IconCart';

export function NavigationBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex align-items-center position-relative">

        <Navbar.Brand as={Link} to="/" className="me-3 d-flex">
          <img className='imgLogo' src="../img/Name.png" alt="Logo" />
          
          <IconCart />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />

        <Navbar.Collapse id="basic-navbar-nav">

          <div className="w-100 d-flex justify-content-center ">
            <Nav className="d-flex align-items-center nav-centered ">

              <Nav.Link 
                as={Link} 
                to="/productos" 
                onClick={closeDropdown} 
                className="nav-center-link"
              >
                Productos
              </Nav.Link>

              <div className="custom-dropdown">
                <button 
                  className="dropdown-title nav-center-link" 
                  onClick={toggleDropdown}
                >
                  Géneros
                  <i className="bi bi-caret-down-fill"></i>
                </button>

                {dropdownOpen && (
                  <div className="dropdown-menu show">
                    <Link className="dropdown-item" to="/categoria/fantasia" onClick={closeDropdown}>
                      Fantasia
                    </Link>
                    <Link className="dropdown-item" to="/categoria/cienciaficcion" onClick={closeDropdown}>
                      Ciencia Ficción
                    </Link>
                    <Link className="dropdown-item" to="/categoria/historica" onClick={closeDropdown}>
                      Historia
                    </Link>
                    <Link className="dropdown-item" to="/categoria/misterio" onClick={closeDropdown}>
                      Misterio
                    </Link>
                  </div>
                )}
              </div>

            </Nav>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
