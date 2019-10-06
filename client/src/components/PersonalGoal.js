import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function GoalModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {props.title}
                </Modal.Title>
            </Modal.Header>  
            <Modal.Body>
                <h5>Goal:</h5>
                <p>{props.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <p>Have you finished this goal yet?</p>
            <Button variant="primary" onClick={props.onHide}>Yes!</Button>
            <Button variant="secondary" onClick={props.onHide}>Not yet!</Button>
            </Modal.Footer>
        </Modal>
    )
}

function PersonalGoal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant="primary" onClick={() =>setModalShow(true)}>Finish Goal</Button>
                </Card.Body>
            </Card>

            <GoalModal
                title={props.title}
                description={props.description}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default PersonalGoal;