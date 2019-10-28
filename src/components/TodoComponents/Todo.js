import React from 'react';

const Todo = props => {

    return(
        <div 
        
        key={props.id} >
           <ul>
               <li>{props.name}</li>
           </ul>
        </div>
    )
}

export default Todo