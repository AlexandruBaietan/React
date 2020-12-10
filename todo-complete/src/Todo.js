import React from 'react'

function Todo(props)
{
        return(
            <div>
                <label forhtml="task">{props.items.task}</label>
                <input  type="checkbox" name="task" checked={props.items.completed} onChange={()=> props.handleChange(props.items.id)}/>               
            </div>
        )
}

export default Todo