import React, { Component } from 'react';
import { InlineWidget } from "react-calendly";

class SessionShow extends Component {
    render() {
        return (
            <div>
                <InlineWidget url="https://calendly.com/got-tutors" />
            </div>
        );
    }
}

export default SessionShow;

//Part of stretch goal 