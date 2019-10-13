 import React, {useState} from "react";
import {useTodo} from '../store/useStore';
//import {sendUpdate} from "../actions/actions";

 const AddTodo = () => {
     const [input, handleInput] = useState('');
      const { sendUpdate } = useTodo();

    const handleClick = (e) => {
        e.preventDefault();
        sendUpdate(input);
        handleInput('');
    };

    return (
        <form>
                <input
                    value = { input }
                    placeholder = "Start typing your todo"
                    type = "text"
                    onChange = {(e) => handleInput(e.target.value)}
                >
                </input>
                <button
                    type = "submit"
                    onClick = { (e) => handleClick(e) }
                >Add Your Todos</button>
        </form>
    );

};

export default AddTodo;

