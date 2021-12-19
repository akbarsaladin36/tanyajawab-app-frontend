import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { GrNotification } from "react-icons/gr";

import NavbarStyle from "./NavbarStyle.module.css";

const Navbar1 = () => {

    const auth = useSelector((state)=> state.auth);
    const history = useHistory();
    const isAuthenticated = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container>
                    {isAuthenticated ? 
                    (<>
                    <Navbar.Brand href="/home">TanyaJawab</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-light">
                            <Nav.Link href="#">All Questions</Nav.Link>
                            <Nav.Link href="#">All Answers</Nav.Link>
                            <Nav.Link href="#">All Followers</Nav.Link>
                            <Nav.Link href="#">Search</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto text-light">
                            <NavDropdown title={<GrNotification />} align="end" id="basic-nav-dropdown">
                              <NavDropdown.Item href="#action/3.4">Notification</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Profile</Nav.Link>
                            <Button onClick={handleLogout}>Logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                    </>) : 
                    (<>
                    <Navbar.Brand href="/">TanyaJawab</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-light">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </>) }
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar1;