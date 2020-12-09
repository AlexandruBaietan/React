import React, { Component } from 'react';

class Header extends Component {
    youMethod() {

    }
    render() {
        return (
            <div><h1>Hello {this.props.name}</h1></div>
        );
    }
}

export default Header;
