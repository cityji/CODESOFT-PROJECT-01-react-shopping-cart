// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Nav.css"

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      {/* <Container> */}
          <Navbar.Brand className='ml-10 ' href="#ComeSoon">
            <img
              src={require('./logo.png')}
              className="d-inline-block align-top logo"
              alt="KhannaRadio Best Wholesale/Retail Electronics Shop in Rewa"
              />
          </Navbar.Brand>
        {/* </Container> */}
        {/* <Container> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='marg-left-3' href="#ComeSoon">Home</Nav.Link>
            <Nav.Link className='marg-left-3' href="#ComeSoon">About Us</Nav.Link>
            <Nav.Link className='marg-left-3' href="#FAQ">FAQ</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Raise a Query!
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Price List
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>


  );
}

export default BasicExample;