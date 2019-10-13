import React, {createContext, useReducer, useContext} from "react";
import { reducer, initialState} from "../reducers/todoReducers";
import {todoActions} from "../actions/actions";

const useTodoHook = () => {
    const [todos, dispatch] = useReducer(reducer, initialState);
    const {sendUpdate, removeElement} = todoActions(dispatch);
    return {todos, sendUpdate, removeElement};
};


const Store = createContext(undefined);

export const StoreProvider = ({children} ) => {
    const stateHooks = {
        todo: useTodoHook()
    };
    return(
        <Store.Provider value={stateHooks}>{children}</Store.Provider>
    );
};

export const useTodo = () => useContext(Store).todo;
