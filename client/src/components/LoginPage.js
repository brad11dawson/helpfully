import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class LoginPage extends React.Component {
    constructor() {
        super()
        this.state = {
            loggingIn: false
        }
        this.switchLogin = this.switchLogin.bind(this)
    }

    switchLogin() {
        this.setState(prevState => {
            return {
                loggingIn: !prevState.loggingIn
            }
        })
    }
    
    render() {
        const loginForm = {
            width: "50vw"
        };
        if (this.state.loggingIn) {
            return (
                <div>
                    <Jumbotron>
                        <h1>Welcome to Helpfully!</h1>
                    </Jumbotron>
                    <Container>
                        <Row className="justify-content-center">
                        <Col xs={12} md={8}>
                            <Form className={loginForm}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                
                            <div>
                                <p>Not Signed Up Yet? Click Here</p>
                                <Button variant="secondary" onClick={this.switchLogin}>Sign Up</Button>
                            </div>
                        </Col>
                        </Row>
                    </Container>
                </div>
              )
        } else {
            return (
                <div>
                    <Jumbotron>
                        <h1>Welcome to Helpfully!</h1>
                    </Jumbotron>
                    <Container>
                        <Row className="justify-content-center">
                        <Col sm={12} md={8}>
                            <Form>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control placeholder="Name" />
                                </Form.Group>
                                <Form.Group controlId="formBio">
                                    <Form.Label>Tell us about yourself! (optional)</Form.Label>
                                    <Form.Control as="textarea" rows="6" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                            <p>Already have an account?</p>
                            <Button variant="secondary" onClick={this.switchLogin}>
                                Login Here
                            </Button>
                        </Col>
                        </Row>
                    </Container>
                </div>
            ) 
        }
    }
  }
  
  export default LoginPage;