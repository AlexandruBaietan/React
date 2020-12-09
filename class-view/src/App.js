import React, { Component } from 'react';
import Header from './Header';
import Greeting from './Greeting';


class App extends Component {
    yourMethodHere() {

    }
    render() {
        return (
            <div>
                <Header name="Alex" />
                <Greeting />
            </div>
        );
    }
}

export default App;
