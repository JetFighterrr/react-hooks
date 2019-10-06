 import React from "react";
import {useState} from "react";
import {sendUpdate} from '../store/useStore';

const AddTodo = () => {
    const [input, handleInput] = useState('');
    // const {sendUpdate} = useTodo();

    const handleClick = (value) => {
        sendUpdate(value);
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
                    onClick = { (e) => handleClick(e)}
                >Add Your Todos</button>
        </form>
    );

};

export default AddTodo;