import React, { createContext, useContext, useReducer } from 'react';

const AmazonContext = createContext();

const AmazonStateProvider = ({initialState, reducer, children}) => (
    <AmazonContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </AmazonContext.Provider>
)

const useAmazonData = () => useContext(AmazonContext);

export {AmazonStateProvider, useAmazonData}