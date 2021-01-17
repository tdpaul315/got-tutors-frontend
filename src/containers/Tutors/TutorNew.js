import React, { Component } from 'react';
import { addTutor } from 'src/actions.js'
import { connect } from 'react-redux'



class TutorNew extends Component {


    constructor(props){
        super(props);

        this.state = {
            name: "", 
            course: "",
            yrs_of_exp: "", 
            availability: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTutor(this.state); 
        this.props.history.push('/tutors')
    }
    
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <h3>New Tutor Form</h3>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={ this.state.name } onChange={ this.handleChange }/><br /><br />
                    </div>
                    <div className="input-field">
                      <label htmlFor="course">Course</label>
                      <input type="text" name="course" id="course" value={ this.state.course} onChange={ this.handleChange }/><br /><br />
                    </div>
                    <div className="input-field">
                      <label htmlFor="yrs_of_exp">Experience (in years)</label>
                      <input type="text" name="yrs_of_exp" id="yrs_of_experience" value={ this.state.yrs_of_exp } onChange={ this.handleChange }/><br /><br />
                    </div>
                    <div className="input-field">
                      <label htmlFor="availability">Availability</label>
                      <input type="text" name="availability" id="availability" value={ this.state.availability } onChange={ this.handleChange }/><br /><br />
                    </div>

                <input type="submit" value="Create Tutor" className="btn" />
            </form>
        );
    }
}

export default connect(null, { addTutor})(TutorNew)