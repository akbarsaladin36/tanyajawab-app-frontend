import { Container, Row, Col } from "react-bootstrap";

import LandingPageStyle from "./LandingPageStyle.module.css";
import Footer from "../../components/Footer/Footer";
import Navbar1 from "../../components/Navbar/Navbar";

import LandingPicture1 from "../../assets/img/edwin-andrade-raise-a-hand-question-unsplash.jpg";
import LandingPicture2 from "../../assets/img/headway-answer-question-unsplash.jpg";
import LandingPicture3 from "../../assets/img/priscilla-du-preez-meet-people-unsplash.jpg";
import DiscussionPicture from "../../assets/img/sebastian-herrmann-discussion-unsplash.jpg";


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
                    <div className="mt-5 mx-5 text-light">
                        <h1 className="mt-5 text-center">Why we want this app ?</h1>
                        <Row className="mt-5">
                          <Col>
                            <img src={DiscussionPicture} className={LandingPageStyle.discussion_picture} alt="discussion" />
                          </Col>
                          <Col>
                            <h5>Solve your problem from one discussion</h5>
                            <p className={`${LandingPageStyle.discussion_picture_word} text-light mt-3`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet at lacus sed condimentum. Proin vitae felis dignissim, pulvinar dui id, ultricies est. Cras consectetur condimentum felis, vehicula scelerisque neque consequat in. Vivamus commodo nibh fringilla, finibus nunc sit amet, iaculis nunc. Fusce tincidunt turpis vitae efficitur viverra. Proin tristique rhoncus posuere. Nulla porta, mi id rhoncus sollicitudin, enim lacus hendrerit ante, non sodales lorem risus eu est. Proin at porta ipsum. Vivamus eget nibh aliquet, ultricies felis sit amet, euismod tellus. Sed fermentum erat et libero fringilla mollis. Maecenas sodales nec quam ornare efficitur. Nulla vel rhoncus erat. Duis sed scelerisque est. Donec ipsum elit, convallis a elementum molestie, tincidunt id augue. Suspendisse at turpis sit amet nisl venenatis rhoncus. Cras condimentum ex at ex condimentum facilisis.</p>
                          </Col>
                        </Row>
                    </div>
                </Container>
            <Footer/>
        </div>
    )
}

export default LandingPage;