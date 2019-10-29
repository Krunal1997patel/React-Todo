// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    return(
        <div className='list-case'>
            {
                props.lists.map(list => (
                    <Todo
                    id={list.id}
                    name={list.task}
                    completed={list.completed}
                    checkedOrNot={props.checkedOrNot}
                    />
                ))
            }
        </div>
    )
}

export default TodoList;