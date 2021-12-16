import { useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Navbar1 from "../../../components/Navbar/Navbar";
import { login } from "../../../redux/actions/auth";
import LoginStyle from "./LoginStyle.module.css";

const Login = () => {

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSuccess, setIsSuccess] = useState("");
    const [isError, setIsError] = useState("");

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if(email === "" && password === "") {
            setIsSuccess(false);
            setIsError("all form must be filled to login!");
        } else if(email === "") {
            setIsSuccess(false);
            setIsError("Your email form must filled!");
        } else if(password === "") {
            setIsSuccess(false);
            setIsError("Your password form must filled!");
        } else {
            const data = {
                userEmail: email,
                userPassword: password
            }
            dispatch(login(data))
            .then((res) => {
                setIsSuccess(res.action.payload.data.msg);
                setIsError(false);
                localStorage.setItem("token", res.action.payload.data.data.token);
                localStorage.setItem("user_id", res.action.payload.data.data.user_id);
                history.push('/home');
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }

    return (
        <div className={LoginStyle.image_background}>
            <Navbar1 />
                <Container>
                    <h3 className="text-center text-light mt-5">Login</h3>
                    <Row className="text-center text-light mt-4">
                        <Col className="mb-5">
                          <Form className="mt-3" onSubmit={handleLoginSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" className={LoginStyle.form_input_size} value={email} onChange={(event)=>changeEmail(event)} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" className={LoginStyle.form_input_size} value={password} onChange={(event)=>changePassword(event)} placeholder="Password" />
                            </Form.Group>
                            { isSuccess && (
                            <div className={`${LoginStyle.alert_size} alert alert-success mt-4`} role="alert">
                                { isSuccess }
                            </div>
                            ) }
                            { isError && (
                            <div className={`${LoginStyle.alert_size} alert alert-danger mt-4`} role="alert">
                                { isError }
                            </div>
                            ) }
                            <Button variant="primary" className={`${LoginStyle.form_input_size} mt-3`} type="submit">
                                Submit
                            </Button>
                            <p className="text-light mt-3">Are you a new member ? You can join <Link to="/register">here</Link></p>
                          </Form>
                        </Col>
                    </Row> 
                </Container>
            <Footer />
        </div>
    )
}

export default Login;