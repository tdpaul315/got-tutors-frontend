import React, { Component } from 'react';
import { InlineWidget } from "react-calendly";

class SessionShow extends Component {
    render() {
        return (
            <div>
                Session Name: <br />
                Description: <br />
                Date: <br />
                <InlineWidget url="https://calendly.com/got-tutors" />
                <button>User Home Page</button>
                <button>Tutor Home Page</button>
            </div>
        );
    }
}

export default SessionShow;