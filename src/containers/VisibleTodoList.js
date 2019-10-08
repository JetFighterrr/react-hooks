import React, {useContext} from 'react';
import {Store, Provider} from '../store/useStore';
import {removeElement} from '../actions/actions';

const VisibleTodoList = () => {
    const {state, dispatch} = useContext(Store);
    const values = ["1","2","3"];

    return (
        <ul>
            {values.map((element, index) => {
                    return (
                        <li
                            key={index}
                            onClick = { () => dispatch(removeElement(index)) }>
                            {element}
                        </li>)
                    }
                )
            }
        </ul>
    );
};

export default VisibleTodoList;