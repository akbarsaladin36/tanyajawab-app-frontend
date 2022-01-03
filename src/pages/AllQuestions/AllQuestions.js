import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Navbar1 from "../../components/Navbar/Navbar";
import AllQuestionStyle from "./AllQuestionsStyle.module.css";

const AllQuestions = () => {
    return (
        <div className={AllQuestionStyle.image_background}>
            <Navbar1 />
                <Container>
                    Ini adalah halaman All Questions
                </Container>
            <Footer />
        </div>
    )
}

export default AllQuestions;