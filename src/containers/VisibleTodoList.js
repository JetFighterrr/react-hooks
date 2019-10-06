import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {removeElement, useLocalStore} from "../store/useStore"

const VisibleTodoList = () => {
    //const state = useStore();
    const values = useSelector(state => state.values);
    const storeHere = useLocalStore();
    // const dispatch = useDispatch();

    return (
        <ul>
            {values.map((element, index) => {
                    return (
                        <li
                            key={index}
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