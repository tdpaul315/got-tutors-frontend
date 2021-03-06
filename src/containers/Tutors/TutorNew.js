import React, { Component } from 'react';
import { addTutor } from '../../actions/actions.js'
import { connect } from 'react-redux'
import { Container } from '@material-ui/core';



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
            <Container>
               <form onSubmit={this.handleSubmit} className="container">
                      <h3>New Tutor Form</h3>
                          <p>Thank you for your interest in becoming a tutor with Got Tutors! Please complete form below and check out other tutors in the community!</p>
                          <div className="input-field">
                              <label htmlFor="name">Name: </label>
                              <input type="text" name="name" id="name" value={ this.state.name } onChange={ this.handleChange }/><br /><br />
                          </div>
                          <div className="input-field">
                            <label htmlFor="course">Course: </label>
                            <input type="text" name="course" id="course" value={ this.state.course} onChange={ this.handleChange }/><br /><br />
                          </div>
                          <div className="input-field">
                            <label htmlFor="yrs_of_exp">Experience (in years): </label>
                            <input type="text" name="yrs_of_exp" id="yrs_of_experience" value={ this.state.yrs_of_exp } onChange={ this.handleChange }/><br /><br />
                          </div>
                          <div className="input-field">
                            <label htmlFor="availability">Availability: </label>
                            <input type="text" name="availability" id="availability" value={ this.state.availability } onChange={ this.handleChange }/><br /><br />
                          </div>
      
                      <input type="submit" value="Create Profile" className="btn" />
               </form>
            </Container>
        );
    }
}

export default connect(null, { addTutor})(TutorNew)