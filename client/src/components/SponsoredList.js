import React from 'react';
import Container from 'react-bootstrap/Container'
import SponsoredPerson from './SponsoredPerson'

class SponsoredList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            user_id: "bradbrad@gmail.com",
            peopleList: [ 
                {
                    name: "Joe Ridgley",
                    goal_title: "This is a good title",
                    goal_description: "I really want some money",
                    pledged_amount: 4563,
                    completed: false
                }, 
                {
                    name: "Jake Ridgley",
                    goal_title: "This is a wierd title",
                    goal_description: "I really want some money",
                    pledged_amount: 1000,
                    completed: false
                },  
                {
                    name: "Jane Ridgley",
                    goal_title: "This is a normal title",
                    goal_description: "I really want some money",
                    pledged_amount: 2000,
                    completed: true
                }
            ]
        }
    }

    componentDidMount() {
        fetch('https://helpfully.herokuapp.com/api/getpledges', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'},
            body: {
                "user_id": this.state.user_id
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("data")
            this.setState({
                peopleList: data
            })
        })
    }

    render() {
        const scrollableContainer = {
            /*
            maxHeight: "50vh",
            overflowY: "auto"*/
        };
        return (
            <Container className="border border-dark bg-light" >
                <h2>Your People</h2>
                <div className="sponsored-list" style={scrollableContainer}>
                    {this.state.peopleList.map(person => {
                        return ( <SponsoredPerson 
                            name={person.name} 
                            title={person.goal_title} 
                            description={person.goal_description} 
                            pledge={person.pledged_amount}
                            isComplete={person.completed}>
                            </SponsoredPerson>)
                    })}
                </div>
            </Container>
        )
    }
}

export default SponsoredList;