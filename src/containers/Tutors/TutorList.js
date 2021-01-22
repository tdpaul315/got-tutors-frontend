import React, { Component } from 'react';
import TutorCard from '../../components/Tutor/TutorCard.js'
import { connect } from 'react-redux'




export class TutorList extends Component {



    render() {
        const tutors = this.props.tutors.map((tutor, i) => <TutorCard key={i} tutor={tutor} />) 
        
        return (
            
              <div>
                 <h3>Check out all of our amazing tutors!</h3>
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