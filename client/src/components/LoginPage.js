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
            loggingIn: true,
            name: "",
            bio: "",
            email: "",
            password: ""
        }
        this.switchLogin = this.switchLogin.bind(this)
        this.signUp = this.signUp.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target
        const name = target.name;
        this.setState({[name]: event.target.value});
    }

    signUp(event) {
        event.preventDefault()
        fetch('https://helpfully.herokuapp.com/api/createaccount', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  email: this.state.email,
                  password: this.state.password,
                  name: this.state.name,
                  bio: this.state.bio
              })
        }).then((response) => console.log(response));
    }

    /*loginEvent(event) {
        event.preventDefault()
        fetch('', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  email: this.state.email,
                  password: this.state.password
              })
        }).then((response) => console.log(response));
    }*/

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
                                    <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
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
                            <Form onSubmit={this.signUp}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="formBio">
                                    <Form.Label>Tell us about yourself! (optional)</Form.Label>
                                    <Form.Control as="textarea" rows="6" name="bio" value={this.state.bio} onChange={this.handleChange}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
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