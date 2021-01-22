import React from 'react';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';





const TutorShow = (props) => {

    let paramsId = parseInt(props.match.params.id)
    let tutor =  props.tutors.find(tutor => tutor.id === paramsId)
    
    return (

        <Container >
            <Avatar src="/broken-image.jpg" />
            <h4>Name: {tutor ? tutor.name : 'N/A'}</h4>
            <p> Course: {tutor ? tutor.course : 'N/A'} </p>
            <p> Exp: {tutor ? tutor.yrs_of_exp : 'N/A'} yrs</p>
            <p> Availability: {tutor ? tutor.availability : 'N/A'}</p><hr /><br />
            {/* <h4 style={{textAlignVertical: "center",textAlign: "center"}}>Upcoming Sessions</h4><hr />
            <p>{tutor ? tutor.sessions : 'No Upcoming Sessions'}</p>   */}
             <Button component={Link}
              to="/sessions/:id"
              fullWidth
              variant="contained"
              color="primary">View/Book Session(s)</Button>&nbsp;&nbsp;
              <Button component={Link}
              to="/"
              fullWidth
              variant="contained"
              color="primary">View Students</Button><br /><br />

            <TextField id="outlined-basic" label="Add a Review" variant="outlined" fullWidth margin="normal" />
      </Container>
        
    

    )
}



const mapStateToProps = state => {
    return {
      tutors: state.tutors
    }
}

export default connect(mapStateToProps)(TutorShow)

