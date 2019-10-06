import React, {createContext, useReducer, useContext} from "react";
import { todo as todoReducers } from "../reducers/todoReducers";

export const sendUpdate = (value) => {
    return {
        type: "ADD_TODO",
        value
    }
};

export const removeElement = (index) => {
    return {
        type: "REMOVE_TODO",
        index
    };
};

export const todoActions = (dispatch) => ({
    sendUpdate: value => dispatch(sendUpdate(value)),
    removeElement: index => dispatch(removeElement(index))
});

// const useTodoHook = () => {
//     const [todos, dispatch] = useReducer(todoReducers, []);
//     const {sendUpdate, removeElement} = todoActions(dispatch);
//     return {todos, sendUpdate, removeElement};
// };

const StoreContext = createContext([]);

export const StoreProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(todoReducers, []);
    return(
        <StoreContext.Provider value = {{state, dispatch}}>{children}</StoreContext.Provider>
    );
};

export const useLocalStore = (store) => {
    const {state, dispatch} = useContext(StoreContext);
    return {state, dispatch};
};



