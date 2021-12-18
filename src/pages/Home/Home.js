import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Navbar1 from "../../components/Navbar/Navbar";
import HomeStyle from "./HomeStyle.module.css";

const Home = () => {
    return (
        <div className={HomeStyle.image_background}>
            <Navbar1 />
                <Container>
                    <h3 className="mt-5 text-light">Dashboard</h3>
                    <Row className="text-light mt-5">
                        <Col>
                            <h5>Timeline Feed</h5>
                        <Form>
                            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={6} placeholder="Ask your problem here.."/>
                            </Form.Group>
                            <Button variant="success" className="form-control">Create</Button>
                        </Form>
                        </Col>
                        <Col>
                        <h5>Who's active user ?</h5>
                        </Col>
                    </Row>
                </Container>
            <Footer />
        </div>
    )
}

export default Home;