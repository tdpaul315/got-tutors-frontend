import React, { Component } from 'react';
import TutorCard from '../../components/Tutor/TutorCard.js'
import { connect } from 'react-redux'
import { fetchTutors } from '/src/actions.js'


class TutorList extends Component {

    componentDidMount(){
        this.props.fetchTutors()
    }

    render() {
        const tutors = this.props.tutors.map((tutor, i) => <TutorCard key={i} tutor={tutor} />) 
        return (
            <div>
               <h3>Tutors</h3>
                <ul className="collection">
                { tutors }
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
  

export default connect(mapStateToProps, {fetchTutors})(TutorList)