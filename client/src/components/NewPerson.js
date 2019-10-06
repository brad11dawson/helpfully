import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class PledgeModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goal_name: "",
            amount: 1,
            pledger: "bradbrad@gmail.com"
        }
        this.makePledge = this.makePledge.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target
        const name = target.name;
        this.setState({[name]: event.target.value});
    }

    makePledge(event) {
        console.log("test");
        event.preventDefault();
        fetch('https://helpify.herokuapp.com/api/pledgegoal', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  id: this.props.id,
                  pledger: this.state.pledger,
                  amount: this.state.amount
              })
        }).then((response) => console.log(response));
    }

    render() {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    {this.props.name}
                    </Modal.Title>
                </Modal.Header>  
                <Modal.Body>
                    <h5>Goal:</h5>
                    <p>{this.props.description}</p>
                </Modal.Body>
                <Modal.Footer>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={this.state.amount} onChange={this.handleChange} name="amount" aria-label="Amount (to the nearest dollar)" />
                    <InputGroup.Append>
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                <Button variant="primary" onClick={this.makePledge}>Create Pledge</Button>
                <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
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