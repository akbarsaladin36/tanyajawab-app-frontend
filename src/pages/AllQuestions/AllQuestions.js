import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import Navbar1 from "../../components/Navbar/Navbar";
import ProfilePicture from "../../assets/img/user-profile-image.png";
import { allQuestionsByUserId } from "../../redux/actions/question";
import AllQuestionStyle from "./AllQuestionsStyle.module.css";

const AllQuestions = () => {

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    // console.log(auth);

    const [AllQuestionsByUserId, setAllQuestionsByUserId] = useState([]);

    useEffect(() => {
      getAllQuestionsByUserId();
    }, [])

    const getAllQuestionsByUserId = () => {
        const id = auth.data.user_id;
        dispatch(allQuestionsByUserId(id))
        .then((res) => {
            console.log(res);
            setAllQuestionsByUserId(res.action.payload.data.data);
        })
        .catch((err) => {
            console.log(err);
        })

    }

    return (
        <div className={AllQuestionStyle.image_background}>
            <Navbar1 />
                <Container>
                    <h2 className="text-light mt-5">All Questions</h2>
                    <br />
                    { AllQuestionsByUserId.map((item, index) => (
                                    <div className="d-flex mt-5" key={index}>
                                      <div className="flex-shrink-0">
                                        <img src={ProfilePicture} className={AllQuestionStyle.profile_user_image_size} alt="profile user" />
                                      </div>
                                      <div className="flex-grow-1 ms-3">
                                        <b className="text-light">{item.user_username}</b>
                                        <Link to={`/question/${item.question_id}`} className="my-3"><p className="my-3">{item.question_title}</p></Link>
                                      </div>
                                    </div>
                    )) }
                </Container>
            <Footer />
        </div>
    )
}

export default AllQuestions;