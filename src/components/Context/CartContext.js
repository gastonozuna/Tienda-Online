import React, {createContext, useState} from "react";

export const CartContext = createContext([]);

const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {

        if(cart.some(element => element.id === item.id)){
            
            let index = cart.findIndex(element => element.id === item.id)
            
            let product = cart[index];
            product.quantity = product.quantity + quantity;

            const newCart = [...cart];
            newCart.splice(index, 1, product);

            setCart([...newCart]);

        } else{
            let product = {...item, quantity};
            setCart([...cart, product]);
        }
    }

    const deleteItemById = (id) => {
        let result = cart.filter((e)=> e.id !== id)
        setCart(result);
    }

    const clearCart = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider 
            value={{
                    cart, 
                    setCart,
                    addToCart,
                    clearCart,
                    deleteItemById,
            }}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider;