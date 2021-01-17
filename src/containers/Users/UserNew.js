import React, { Component } from 'react';

class UserNew extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: "", 
            age: "",
            grade: "", 
           
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addUser(this.state); 
        this.props.history.push('/users')
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <h3>New User Form</h3>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={ this.handleChange }/><br /><br />
                    </div>
                    <div className="input-field">
                      <label htmlFor="age">Age:</label>
                      <input type="text" name="age" id="age" value={this.state.age} onChange={ this.handleChange }/><br /><br />
                    </div>
                    <div className="input-field">
                      <label htmlFor="grade">Grade:</label>
                      <input type="text" name="grade" id="grade" value={this.state.grade} onChange={ this.handleChange }/><br /><br />
                    </div>
    
                <input type="submit" value="Create Tutor" className="btn" />
            </form>
        );
    }
}

export default UserNew;