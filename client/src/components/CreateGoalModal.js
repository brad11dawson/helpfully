import React from 'react';
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function CreateGoalModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create a goal
                </Modal.Title>
            </Modal.Header>  
            <Modal.Body>
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                    Goal Title:
                </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="goal-title" aria-describedby="basic-addon3" />
            </InputGroup>
            
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Description:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" rows="6" aria-label="With textarea" />
            </InputGroup>
            </Modal.Body>
            <Modal.Footer>
            
            <Button variant="primary" onClick={props.onHide}>Create Goal</Button>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateGoalModal;