 import React from "react";
import {useState} from "react";
import { useDispatch } from 'react-redux';

 // import {useDispatch, useSelector} from "react-redux";

const AddTodo = () => {
    const [input, handleInput] = useState('');
    const dispatch = useDispatch();
    const sendUpdate = (value) => {
        return {
            type: "ADD_TODO",
            value
        }
    };
    const handleClick = (value) => {
        dispatch(sendUpdate(value));
        handleInput('');
    };

    return (
        <form>
                <input
                    value = { input }
                    placeholder = "Start typing your todo"
                    type = "text"
                    onChange = {(e) => {handleInput(e.target.value)}}
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