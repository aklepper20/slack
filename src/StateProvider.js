import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this line allows us to a the data layer
export const useStateValue = () => useContext(StateContext);

//stateprovider wraps the children inside a data layer
//so when we have a user log in, we can use it wherever in our app
//store anything in data layer
//userReducer takes some kind of reducer (listens to any action that we shoot at data layer)
//intial state what the data layer looks like before we do anything to it.
//
