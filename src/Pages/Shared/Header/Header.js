import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';


import './Header.css'

const Header = () => {
    return (
        <div>
            {/* const {user,logOut} = useAuth() */}

            <Navbar sticky="top" collapseOnSelect expand="lg" bg="myRed"  >
                <Container>
                    <Navbar.Brand as={HashLink} to="/" className="fs-1"> <span className="text-white" >Wheels</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={HashLink} to="/"><span className="text-white" >Home</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/cars"><span className="text-white" >Cars</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/#doctors"><span className="text-white" >Doctor</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/#doctors"><span className="text-white" >Appointment</span></Nav.Link>
                            <Nav.Link as={HashLink} to="/contact"><span className="text-white" >Contact</span></Nav.Link>

                        </Nav>


                        <Nav><button className="btn btn-danger">Sign out </button></Nav>
                        <Nav>
                            <Nav.Link as={HashLink} to="/login" >Login</Nav.Link>
                            <Nav.Link as={HashLink} to="/register" className="header-button">Sign up </Nav.Link>
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;