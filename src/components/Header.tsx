import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" style={{background: '#010A19'}} data-bs-theme="light">
        <Container>
            <Navbar.Brand href="/" className='text-light fs-1'>AirQuality</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto px-5">
                  <Nav.Link href="/" className='text-light fs-2 px-3'>Главная</Nav.Link>
                  <Nav.Link href="/map" className='text-light fs-2 px-3'>Карта</Nav.Link>
                  <Nav.Link href="/about" className='text-light fs-2 px-3'>О нас</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header