import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar1 from "../../components/Navbar/Navbar";
import { oneQuestion } from "../../redux/actions/question";
import QuestionDetailStyle from "./QuestionDetailStyle.module.css";

const QuestionDetail = () => {

    const { id } = useParams();
    const question = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const [oneQuestionList, setOneQuestionList] = useState();

    useEffect(() => {
        getOneQuestion();
    }, [])

    const getOneQuestion = () => {
        dispatch(oneQuestion(id))
        .then((res) => {
            console.log(res);
            setOneQuestionList(res.action.payload.data.data);
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
                        <h5 className="mt-4">Created By : {oneQuestionList.profileUser[0].user_username}</h5>
                        <h6 className="mt-5">{oneQuestionList.question_text}</h6>
                    </div>
                    <div className="text-light mt-5">
                        <h2>All Answer</h2>
                    </div>
                </Container>
            <Footer />
        </div>
    )
}

export default QuestionDetail;