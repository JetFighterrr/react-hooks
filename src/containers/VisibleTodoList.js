import React, {useContext} from 'react';
import {Store, StoreProvider} from '../store/useStore';
import {removeElement} from '../actions/actions';
import {useSelector} from "react-redux";

const VisibleTodoList = () => {
    const {state, dispatch} = useContext(Store);
    const values = useSelector(state => state.values);

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