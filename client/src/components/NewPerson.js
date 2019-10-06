import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function PledgeModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {props.name}
                </Modal.Title>
            </Modal.Header>  
            <Modal.Body>
                <h5>Goal:</h5>
                <p>{props.description}</p>
            </Modal.Body>
            <Modal.Footer>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <Button variant="primary" onClick={props.onHide}>Create Pledge</Button>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

function NewPerson(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle>{props.title}</Card.Subtitle>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant="primary" onClick={() =>setModalShow(true)}>Make Pledge</Button>
                </Card.Body>
            </Card>

            <PledgeModal
                name={props.name}
                description={props.description}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}



export default NewPerson;