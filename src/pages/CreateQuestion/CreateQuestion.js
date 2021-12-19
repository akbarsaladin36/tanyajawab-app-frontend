import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar1 from "../../components/Navbar/Navbar";
import CreateQuestionStyle from "./CreateQuestionStyle.module.css";

const CreateQuestion = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [questionTitle, setQuestionTitle] = useState("");
    const [questionText, setQuestionText] = useState("");
    const [questionTags, setQuestionTags] = useState("");
    const [isSuccess, setIsSuccess] = useState("");
    const [isError, setIsError] = useState("");

    const changeQuestionTitle = (event) => {
        setQuestionTitle(event.target.value);
    }

    const changeQuestionText = (event) => {
        setQuestionText(event.target.value);
    }

    const changeQuestionTags = (event) => {
        setQuestionTags(event.target.value);
    }

    const handleCreateQuestion = (event) => {
        event.preventDefault();
        if(questionTitle === "" && questionText === "" && questionTags === "") {
            setIsSuccess(false);
            setIsError("Fill all form to create a new question now!");
        } else if (questionTitle === "") {
            setIsSuccess(false);
            setIsError("Fill a question title form now!");
        } else if (questionText === "") {
            setIsSuccess(false);
            setIsError("Fill a question text now!");
        } else if (questionTags === "") {
            setIsSuccess(false);
            setIsError("Fill a question tags now!");
        } else {
            console.log("Testing create a new form is success");
        }
    }

    return (
        <div className={CreateQuestionStyle.image_background}>
            <Navbar1 />
                <Container>
                    <div className="text-light mt-5">
                        <h3 className="text-center">Create A Question</h3>
                        <Form className="mt-5" onSubmit={handleCreateQuestion}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Question Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter a question title" value={questionTitle} onChange={(event) => changeQuestionTitle(event)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Question Text</Form.Label>
                                <Form.Control as="textarea" rows={8} placeholder="Enter a question text" value={questionText} onChange={(event) => changeQuestionText(event)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Question Tags</Form.Label>
                                <Form.Control type="text" placeholder="Enter a question tags" value={questionTags} onChange={(event) => changeQuestionTags(event)}/>
                            </Form.Group>
                            { isSuccess && (
                            <div className="alert alert-success mt-4" role="alert">
                                { isSuccess }
                            </div>
                            ) }
                            { isError && (
                            <div className="alert alert-danger mt-4" role="alert">
                                { isError }
                            </div>
                            ) }
                            <Button variant="success" className="form-control mt-3">Create</Button>
                        </Form>
                    </div>
                </Container>
            <Footer />
        </div>
    )
}

export default CreateQuestion;