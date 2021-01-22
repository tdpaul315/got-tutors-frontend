import React from 'react';
import { connect } from 'react-redux'
import { removeTutor } from '../../actions/actions.js'
import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core';

const TutorCard = ({tutor, removeTutor}) => {
    return (
        <Container >
           <ul className="tutor-card">
             <Link to={`/tutors/${tutor.id}`}>{tutor.name}</Link><br />
               Course(s): {tutor.course} <br />
               Years of Exp: {tutor.yrs_of_exp} <br />            
               Availability: {tutor.availability} <br />
               <button onClick={()=>removeTutor(tutor.id)}>Delete Profile</button> 
           </ul><br />
        </Container>
    );
};

export default connect(null, { removeTutor })(TutorCard)