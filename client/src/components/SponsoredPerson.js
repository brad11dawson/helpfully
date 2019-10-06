import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PayPledgeModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Pay Pledge
                </Modal.Title>
            </Modal.Header>  
            <Modal.Body>
                <p>{props.name} completed his goal! Send your pledge?</p>
            </Modal.Body>
            <Modal.Footer>
            <h5>Total ${props.pledge}</h5>
            <Button variant="primary" onClick={props.onHide}>Send Pledge</Button>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

function SponsoredPerson(props) {
    let isComplete = props.isComplete ? <Button onClick={() =>setModalShow(true)}>Complete: Send Pledge</Button> : "In Progress"
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle>{props.title}</Card.Subtitle>
                    <Card.Text>{props.description}</Card.Text>
                    <Card.Text>{props.pledge}</Card.Text>
                    <Card.Text>{isComplete}</Card.Text>
                </Card.Body>
            </Card>

            <PayPledgeModal
                name={props.name}
                pledge={props.pledge}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default SponsoredPerson;