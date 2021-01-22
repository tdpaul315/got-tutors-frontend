// import React, { Component } from 'react';
// import SessionCard from '../../components/Tutor/SessionCard.js'
// import { connect } from 'react-redux'
// import { fetchSessions } from '../../actions/actions.js'



// export class SessionList extends Component {

//     componentDidMount(){
//         this.fetchSessions();
//     }

//     render() {
//         const sessions = this.props.sessions.map((session, i) => <SessionCard key={i} session={session} />) 
        
//         return (
//             <div>
//                <h3>Check out all of our amazing sessions!</h3>
//                 <ul className="session-collection">
//                 {sessions}
//                 </ul>
//             </div>
//         );
//     }

// }

// const mapStateToProps = state => {
//     return {
//       sessions: state.sessions
//     }
// }
  

// export default connect(mapStateToProps)(SessionList)

// As part of my stretch goals, my application will display sessions