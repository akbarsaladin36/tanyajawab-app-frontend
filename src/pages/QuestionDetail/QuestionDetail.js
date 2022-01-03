import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar1 from "../../components/Navbar/Navbar";
import { createAnswer, getAllAnswer } from "../../redux/actions/answer";
import { oneQuestion } from "../../redux/actions/question";
import ProfilePicture from "../../assets/img/user-profile-image.png";
import QuestionDetailStyle from "./QuestionDetailStyle.module.css";
import { Link } from "react-router-dom";

const QuestionDetail = () => {

    const { id } = useParams();
    const question = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const [oneQuestionList, setOneQuestionList] = useState([]);
    const [answerText, setAnswerText] = useState(""); 
    const [allAnswerForQuestion, setAllAnswerForQuestion] = useState([]);

    useEffect(() => {
        getOneQuestion();
        getAllAnswerByQuestionId();
    }, [])

    const getOneQuestion = () => {
        dispatch(oneQuestion(id))
        .then((res) => {
            console.log(res.action.payload.data.data[0]);
            setOneQuestionList(res.action.payload.data.data[0]);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const getAllAnswerByQuestionId = () => {
        dispatch(getAllAnswer(id))
        .then((res) => {
            console.log(res);
            setAllAnswerForQuestion(res.action.payload.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const changeAnswerText = (event) => {
        setAnswerText(event.target.value);
    }

    const handleSubmitAnswer = () => {
        const data = {
            questionId: id,
            answerBody: answerText
        };
        dispatch(createAnswer(data))
        .then((res) => {
            console.log(res);
            setTimeout(() => {
                history.push(`/question/${id}`);
            }, 3000)
            getAllAnswerByQuestionId();
        })
        .catch((err) => {
            console.log(err);
        })
    }


    return (
        <div className={QuestionDetailStyle.image_background}>
            <Navbar1 />
                <Container>
                    <div className="text-light mt-5">
                        <h2>{oneQuestionList.question_title}</h2>
                        <h5 className="mt-4">{oneQuestionList.question_text}</h5>
                        <h6 className="mt-5">Created By: {oneQuestionList.user_username}</h6>
                    </div>
                    <div className="text-light mt-5">
                        <h2>All Answer</h2>
                        <Form>
                            <Form.Control as="textarea" value={answerText} rows={8} placeholder="Enter a question text" onChange={(event) => changeAnswerText(event)}/>
                            <Button className="btn btn-primary mt-3" onClick={handleSubmitAnswer}>Answer Now!</Button>
                        </Form>
                        { allAnswerForQuestion.map((item, index) => (
                                    <div className="d-flex mt-5" key={index}>
                                      <div className="flex-shrink-0">
                                        <img src={ProfilePicture} className={QuestionDetailStyle.profile_user_image_size} alt="profile user" />
                                      </div>
                                      <div className="flex-grow-1 ms-3">
                                      <b>{item.user_username}</b>
                                        <p className="my-3">{item.answer_text}</p>
                                      </div>
                                    </div>
                            )) }
                    </div>
                </Container>
            <Footer />
        </div>
    )
}

export default QuestionDetail;