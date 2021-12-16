import { Container, Row, Col } from "react-bootstrap";

import LandingPageStyle from "./LandingPageStyle.module.css";
import Footer from "../../components/Footer/Footer";
import Navbar1 from "../../components/Navbar/Navbar";
import LandingPicture1 from "../../assets/img/edwin-andrade-raise-a-hand-question-unsplash.jpg";
import LandingPicture2 from "../../assets/img/headway-answer-question-unsplash.jpg";
import LandingPicture3 from "../../assets/img/priscilla-du-preez-meet-people-unsplash.jpg";


const LandingPage = () => {
    return (
        <div className={LandingPageStyle.image_background}>
            <Navbar1 />
                <Container>
                    <h1 className="text-center mt-5 mb-3 text-light">Welcome To TanyaJawab</h1>
                    <div className="text-center text-light mt-5">
                      <h4>The app that make you:</h4>
                      <Row className="text-light mt-5">
                          <Col>
                            <img src={LandingPicture1} className={LandingPageStyle.landing_picture_1_size} alt="asking_a_question" />
                            <h3 className="mt-3">Ask</h3>
                          </Col>
                          <Col>
                            <img src={LandingPicture2} className={LandingPageStyle.landing_picture_2_size} alt="asking_a_question" />
                            <h3 className="mt-3">Answer</h3>
                          </Col>
                          <Col>
                            <img src={LandingPicture3} className={LandingPageStyle.landing_picture_3_size} alt="asking_a_question" />
                            <h3 className="mt-3">Follow</h3>
                          </Col>
                      </Row>
                    </div>
                    <div className="mt-5 mx-5 text-center text-light">
                        <h1 className="mt-5">Why we want this app ?</h1>
                    </div>
                </Container>
            <Footer/>
        </div>
    )
}

export default LandingPage;