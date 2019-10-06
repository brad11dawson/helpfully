import React from 'react';
import Container from 'react-bootstrap/Container'
import PersonalGoal from './PersonalGoal'

class YourGoalList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            goalList: [ 
                {
                    goal_title: "This is a good title",
                    goal_description: "I really want some money",
                }, 
                {
                    goal_title: "This is a wierd title",
                    goal_description: "I really want some money", 
                },  
                {
                    goal_title: "This is a normal title",
                    goal_description: "I really want some money",
                }
            ]
        }
    }

    render() {
        const scrollableContainer = {
            maxHeight: "50vh",
            overflowY: "auto"
        };
        return (
            <Container className="border border-dark bg-light" >
                <h2>Your Goals</h2>
                <div className="goal-list" style={scrollableContainer}>
                    {this.state.goalList.map(goal => {
                        return ( <PersonalGoal 
                            title={goal.goal_title} 
                            description={goal.goal_description} >
                            </PersonalGoal>)
                    })}
                </div>
            </Container>
        )
    }
}

export default YourGoalList;