import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../../components/Footer/Footer";
import Navbar1 from "../../components/Navbar/Navbar";
import HomeStyle from "./HomeStyle.module.css";

const Home = () => {

    const question = useSelector((state) => state.question);
    const history = useHistory();
    const dispatch = useDispatch();

    const [isAllQuestions, setIsAllQuestions] = useState(null);

    return (
        <div className={HomeStyle.image_background}>
            <Navbar1 />
                <Container>
                    <h3 className="mt-5 text-light">Dashboard</h3>
                    <Row className="text-light mt-5">
                        <Col>
                            <h5>Timeline Feed</h5>
                            <Link to="/create-question" className="btn btn-primary mt-3">Ask A Question</Link>
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