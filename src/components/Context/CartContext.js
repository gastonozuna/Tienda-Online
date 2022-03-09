import React, {createContext, useState} from "react";

export const CartContext = createContext([]);

const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {

        let product = {... item, quantity};
        setCart([...cart, product]);

        console.log('prod',product);
        console.log('carrt',cart);
    }

    return(
        <CartContext.Provider value={{cart, setCart, addToCart}}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider;