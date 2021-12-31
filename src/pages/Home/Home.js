import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { allQuestions } from "../../redux/actions/question";
import { useHistory } from "react-router-dom";
import ProfilePicture from "../../assets/img/user-profile-image.png";

import Footer from "../../components/Footer/Footer";
import Navbar1 from "../../components/Navbar/Navbar";
import HomeStyle from "./HomeStyle.module.css";

const Home = () => {

    const question = useSelector((state) => state.question);
    const history = useHistory();
    const dispatch = useDispatch();

    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        getAllQuestions();
    }, []);

    const getAllQuestions = () => {
        dispatch(allQuestions())
        .then((res) => {
            console.log(res);
            setQuestionList(res.action.payload.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className={HomeStyle.image_background}>
            <Navbar1 />
                <Container>
                    <h3 className="mt-5 text-light">Dashboard</h3>
                    <Row className="text-light mt-5">
                        <Col>
                            <h5>Timeline Feed</h5>
                            <Link to="/create-question" className="btn btn-primary mt-3">Ask A Question</Link>
                            <br />
                            <hr />
                            { questionList.map((item, index) => (
                                    <div className="d-flex mt-5" key={index}>
                                      <div className="flex-shrink-0">
                                        <img src={ProfilePicture} className={HomeStyle.profile_user_image_size} alt="profile user" />
                                      </div>
                                      <div className="flex-grow-1 ms-3">
                                        <b>{item.user_username}</b>
                                        <Link to={`/question/${item.question_id}`} className="my-3"><p className="my-3">{item.question_title}</p></Link>
                                      </div>
                                    </div>
                            )) }
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