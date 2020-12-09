import React, { Component } from 'react';

class Greeting extends Component {
    method() {}

    render() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;

        if (hours < 12) {
            timeOfDay = 'morning';
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = 'afternoon';
        } else {
            timeOfDay = 'night';
        }
        return (<div>
            <h1>Have a good {timeOfDay}</h1>
        </div>);
    }
}
export default Greeting;
