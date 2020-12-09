import React from 'react';
import Todo from './Todo';
import todos from './todos';


class App extends React.Component {
    constructor() {
        super();
        this.state = { todo: todos };
    }

    render() {
        const todoss = this.state.todo.map(items => <Todo key={items.id} item={items} />);
        return (
            <div style={{ border: '2px solid black' }}>{ todoss }</div>
        );
    }
}

export default App;
