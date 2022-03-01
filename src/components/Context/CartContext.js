import React, {createContext, useContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    return(
        <CartContext.Provider value=''>{children}</CartContext.Provider>
    )
}