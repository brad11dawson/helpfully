import React from 'react';
import Container from 'react-bootstrap/Container'
import NewPerson from './NewPerson'

class NewPeopleList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            peopleList: [ 
                {
                    name: "Joe Ridgley",
                    goal_title: "This is a good title",
                    goal_description: "I really want some money",
                    id: "dkslfjdsklf"
                }, 
                {
                    name: "Jake Ridgley",
                    goal_title: "This is a wierd title",
                    goal_description: "I really want some money", 
                    id: "fklsdjfsdfa"
                },  
                {
                    name: "Jane Ridgley",
                    goal_title: "This is a normal title",
                    goal_description: "I really want some money",
                    id: "dfjlsdafjsd"
                }
            ]
        }
    }

    render() {
        const scrollableContainer = {
            /*maxHeight: "50vh",
            overflowY: "auto"*/
        };
        return (
            <Container className="border border-dark bg-light" >
                <h2>Find New People to Helpify</h2>
                <div className="sponsored-list" style={scrollableContainer}>
                    {this.state.peopleList.map(person => {
                        return ( <NewPerson 
                            name={person.name} 
                            title={person.goal_title} 
                            description={person.goal_description}
                            id={person.id} >
                            </NewPerson>)
                    })}
                </div>
            </Container>
        )
    }
}

export default NewPeopleList;