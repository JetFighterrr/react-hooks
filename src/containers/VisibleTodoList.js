import React from "react";
import {useState} from "react";

const VisibleTodoList = () => {
    const [myList, updateList] = useState(["1","2","3"]);

    const removeElement = (index) => {
        updateList(
            [...myList.slice(0,index), ...myList.slice(index+1)]
        );
    };

    return (
        <ul>
            {myList.map((element, index) => {
                    return (
                        <li
                            key={index}
                            onClick = { () => removeElement(index) }
                        >
                            {element}
                        </li>)
                    }
                )
            }
        </ul>
    );
};

export default VisibleTodoList;