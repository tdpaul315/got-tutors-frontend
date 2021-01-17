import React, { Component } from 'react';


class TutorShow extends Component {
    constructor(props){
        super(props)

        let paramsID = parseInt(this.props.match.params.id)
        let tutor = props.tutors.find(tutor => tutor.id === paramsID)

        this.state = {
            tutor: tutor ? tutor : {name: 'N/A', course: 'N/A', yrs_of_exp: 'N/A', availability: 'N/A'}
        }
    }
    render() {
        const {name, course, yrs_of_exp, availability} = this.state.tutor;
        return (
            <div>
                <h3>{ name }</h3>
                <p>Course: { course }</p>
                <p>Experience: { yrs_of_exp }</p>
                <p>Availability: { availability }</p>
            <button>View My Upcoming Sessions</button>
            <button>View Students</button>
            </div>
        );
    }
}

export default TutorShow;