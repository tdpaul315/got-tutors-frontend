import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Main from './components/Main'
import NavBar from './components/NavBar';
import TutorNew from './containers/Tutors/TutorNew'; 
import TutorList from '../src/containers/Tutors/TutorList.js';
import TutorShow from '../src/containers/Tutors/TutorShow.js'; 
import TutorHome from '../src/containers/Tutors/TutorHome.js'; 
import UserHome from '../src/containers/Users/UserHome.js';
import UserNew from '../src/containers/Users/UserNew.js';
import SessionList from '../src/containers/Tutors/SessionList.js';
import SessionShow from '../src/containers/Tutors/SessionShow.js'
import { fetchTutors } from './actions/actions';






class App extends Component {

  componentDidMount(){
    this.props.fetchTutors();
  }

  
  
  render() {
    return (
      <Router>
      <NavBar /><br />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/tutors/home" component={TutorHome} />
            <Route exact path="/users/home" component={UserHome} />
            <Route exact path="/users/new" component={UserNew} />
            <Route exact path="/tutors/new" component={TutorNew} />
            <Route exact path="/tutors" component={TutorList} />
            <Route exact path="/tutors/:id" component={TutorShow}/>
            <Route exact path="/sessions" component={SessionList} />
            <Route exact path="/sessions/:id" component={SessionShow}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
  
export default connect(null, {fetchTutors})(App)
