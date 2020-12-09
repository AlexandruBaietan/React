import React, { Component } from 'react';
import ChildComponent from './ChildComponent';


class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Alex',
            age: '32',
            isLogged: true,
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <ChildComponent state={this.state} />
            </div>
        );
    }

}

export default App;
