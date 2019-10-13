import React from 'react';
import {useTodo} from '../store/useStore';

const VisibleTodoList = () => {
    const {todos, removeElement} = useTodo();


    return (
        <ul>
            {todos.values.map((element, index) => {
                    return (
                        <li
                            key = {index}
                            onClick = { () => removeElement(index) }>
                            {element}
                        </li>)
                    }
                )
            }
        </ul>
    );
};

export default VisibleTodoList;