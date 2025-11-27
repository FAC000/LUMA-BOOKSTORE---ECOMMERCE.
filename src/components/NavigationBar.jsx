import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { IconCart } from './IconCart';


export function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

        <Navbar.Brand href="/">

          <img className='imgLogo' src="../img/Name.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/productos'}>
              <Nav.Link href="#home">Productos</Nav.Link>
            </Link>
            <NavDropdown title="Generos" id="basic-nav-dropdown">
              <Link to={'/categoria/fantasia'}>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              </Link>
              <Link to={'/categoria/cienciaficcion'}>
                <NavDropdown.Item href="#action/3.2">
                  Ciencia Ficcion
                </NavDropdown.Item>
              </Link>

              <Link to={'/categoria/historica'}>
                <NavDropdown.Item href="#action/3.3">Historia</NavDropdown.Item>
              </Link>

              <Link to={'/categoria/misterio'}>
                <NavDropdown.Item href="#action/3.4">Misterio</NavDropdown.Item>
              </Link>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
        <IconCart />
      </Container>
    </Navbar>
  );
}

