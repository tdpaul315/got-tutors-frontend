import React, { Component } from 'react';
import TutorCard from '../../components/Tutor/TutorCard.js'
import { connect } from 'react-redux'
import { Container } from '@material-ui/core';




export class TutorList extends Component {



    render() {
        const tutors = this.props.tutors.map((tutor, i) => <TutorCard key={i} tutor={tutor} />) 
        
        return (
            
              <div>
                 <Container><h3>Welcome to the Got Tutors Community! Below are a list of tutors in our wonderful community, check them out by clicking their name!</h3></Container>
                  <ul className="tutor-collection">
                  {tutors}
                  </ul>
              </div>
            
        );
    }

}

const mapStateToProps = state => {
    return {
      tutors: state.tutors
    }
}
  

export default connect(mapStateToProps)(TutorList)