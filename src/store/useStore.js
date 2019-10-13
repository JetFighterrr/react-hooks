import React, {createContext, useReducer} from "react";
import {createStore} from "redux";
import { reducer, initialState } from "../reducers/todoReducers";

const store = createStore(reducer, initialState);

const Store = createContext(undefined);

const StoreProvider = ({children} ) => {
    return(
        <Store.Provider value ={store}>{children}</Store.Provider>
    );
};

export {Store, StoreProvider};
