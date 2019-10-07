import React, {createContext, useReducer} from "react";
import {createStore} from "redux";
import { reducer, initialState } from "../reducers/todoReducers";
// import {createStore} from "redux";

const Store = createContext('someStoreContext');


const Provider = ( {children} ) => {
    const store = createStore(reducer, initialState);
    return(
        <Store.Provider value ={store}>{children}</Store.Provider>
    );
};

export {Store, Provider};

    // const createStore = (reducer, initialState ) => {
    //   const [state, dispatch] = useReducer(reducer, initialState);
    //   return {state, dispatch};
    // };




