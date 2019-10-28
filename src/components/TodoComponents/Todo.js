import React from 'react';

const Todo = props => {

    return(
        <div 
        className={`item${props.completed ? '-checked' : '' }`}
        onClick={() => props.checkedOrNot(props.id)}
        key={props.id} >
           <ul>
               <li>{props.name}</li>
           </ul>
        </div>
    )
}

export default Todo