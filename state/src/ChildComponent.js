import React, { Component } from 'react';

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>
                    your age is {this.props.state.age}
                    <span> you are curentlly logged {this.props.state.isLogges ? 'in' : 'out'}</span>
                </h1>
            </div>
        );
    }
}

export default ChildComponent;
