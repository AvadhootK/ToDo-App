import React from 'react'

function TodoItem(props) {
    const completedStyle = {
        fontStyle : "italic",
        color : "#cdcdcd",
        textDecoration : "line-through"
    }

    return(
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed ? true : false} 
                onChange={() => props.handleChange(props.item.id)}          // we did this as we cannot pass parameters to a function directly. So the arrow function calls the handleChange function 
            />
            <p style = {props.item.completed ? completedStyle : null} >{props.item.text}</p>
        </div> 
    )
}

export default TodoItem