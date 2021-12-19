import { useState } from "react";
import { Col, Container, Row, Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { register } from "../../../redux/actions/auth";

import Footer from "../../../components/Footer/Footer";
import Navbar1 from "../../../components/Navbar/Navbar";
import RegisterStyle from "./RegisterStyle.module.css";

const Register = () => {

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSuccess, setIsSuccess] = useState("");
    const [isError, setIsError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const changeUsername = (event) => {
        setUsername(event.target.value);
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const changeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const handleRegisterForm = (event) => {
        event.preventDefault();
        if(email === "" && username === "" && password === "" && confirmPassword === ""){
            setIsSuccess(false);
            setIsError("You must fill all form now!");
        } else if (email === "") {
            setIsSuccess(false);
            setIsError("Your email form is empty! Please fill it with registered email you have!");
        } else if (username === "") {
            setIsSuccess(false);
            setIsError("Your username form is empty! Please fill with your username now!");
        } else if (password === "") {
            setIsSuccess(false);
            setIsError("Your password is empty! Please fill with your password now!");
        } else if (confirmPassword === "") {
            setIsSuccess(false);
            setIsError("Your confirm password is empty ! Please fill with your confirm password now!");
        } else if (password !== confirmPassword ) {
            setIsSuccess(false);
            setIsError("Your password is not match with your confirm password! password and confirm password must match each other!");
        } else {
            const data = {
                userEmail: email,
                userUsername: username,
                userPassword: password
            }
            dispatch(register(data))
            .then((res) => {
                setIsSuccess(res.action.payload.data.msg);
                setIsError(false);
                setIsLoading(true);
                setTimeout(() => {
                    history.push('/login');
                }, 4500)
            })
            .catch((err) => {
                console.log(err);
                setIsSuccess(false);
            });
        }
    }

    return (
        <div className={RegisterStyle.image_background}>
            <Navbar1 />
                <Container>
                    <h3 className="text-center text-light mt-5">Register</h3>
                    <Row className="text-center text-light mt-4">
                        <Col className="mb-5">
                          <Form className="mt-3" onSubmit={handleRegisterForm} noValidate>
                            <Form.Group className="mb-3">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" value={email} className={RegisterStyle.form_input_size} placeholder="Enter email" onChange={(event)=>changeEmail(event)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" value={username} className={RegisterStyle.form_input_size} placeholder="Username" onChange={(event)=>changeUsername(event)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} className={RegisterStyle.form_input_size} placeholder="Password" onChange={(event)=>changePassword(event)} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" value={confirmPassword} className={RegisterStyle.form_input_size} placeholder="Confirm Password" onChange={(event)=>changeConfirmPassword(event)}/>
                            </Form.Group>
                            { isSuccess && (
                            <div className={`${RegisterStyle.alert_size} alert alert-success mt-4`} role="alert">
                                { isSuccess }
                            </div>
                            ) }
                            { isError && (
                            <div className={`${RegisterStyle.alert_size} alert alert-danger mt-4`} role="alert">
                                { isError }
                            </div>
                            ) }
                            <Button variant="primary" className={`${RegisterStyle.form_input_size} mt-3`} type="submit">
                                { isLoading ? (<Spinner animation="border" />) : ("Create an Account") }
                            </Button>
                            <p className="text-light mt-3">Have you registered as member ? Please login <Link to="/login">here</Link></p>
                          </Form>
                        </Col>
                    </Row> 
                </Container>
            <Footer />
        </div>
    )
}

export default Register;