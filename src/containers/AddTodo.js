 import React, {useContext, useState} from "react";
import {Store, StoreProvider} from '../store/useStore';
import {sendUpdate} from "../actions/actions";

 const AddTodo = () => {
    const [input, handleInput] = useState('');
    const {state, dispatch} = useContext(Store);

    const handleClick = (value) => {
        value.preventDefault();
        dispatch(sendUpdate(value));
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

