import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
                        <Nav className="ms-auto text-light">
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