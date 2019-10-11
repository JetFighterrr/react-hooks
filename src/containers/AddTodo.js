 import React, {useContext, useState} from "react";
import {Store, Provider} from '../store/useStore';
import {sendUpdate} from "../actions/actions";
import {connect, useDispatch} from "react-redux";
 import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
 import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


 const AddTodo = () => {
    const [input, handleInput] = useState('');
    const {state, dispatch} = useContext(Store);
    // const dispatch = useDispatch();

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

