import React from 'react';
import Card from 'react-bootstrap/Card';

function SponsoredPerson(props) {
    let isComplete = props.isComplete ? "Complete" : "In Progress"
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>{props.title}</Card.Subtitle>
                <Card.Text>{props.description}</Card.Text>
                <Card.Text>{props.pledge}</Card.Text>
                <Card.Text>{isComplete}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SponsoredPerson;