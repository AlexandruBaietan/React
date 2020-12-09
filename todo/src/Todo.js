import React from 'react';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (

            <div >
                <label htmlFor="checkbox">{this.props.item.text}</label>
                <input type="checkbox" name="checkbok" checked={this.props.item.completed} />
            </div>

        );
    }
}
export default Todo;
