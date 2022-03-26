import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './CartWidget.css';

export const CartWidget = () => {

    const cartContext = useContext(CartContext);
    const {cart} = cartContext;
    
        return(
            <>
                <div>
                <button className='cartButton'>
                <i className="fas fa-shopping-cart"></i>
                {cart.length !== 0 ?
                <span>  {cart.reduce((acum, item) => acum + item.quantity, 0)}</span>
                : ""
                }
                </button>
                </div>
        </>
    )

}

