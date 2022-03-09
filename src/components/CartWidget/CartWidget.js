import { useContext } from 'react';
import { Cart } from '../Cart/Cart';
import { CartContext } from '../Context/CartContext';
import './CartWidget.css';

export const CartWidget = () => {

    const cartContext = useContext(CartContext);
    const {cart} = cartContext;

    console.log(cart);

        return(
            
            <div>
                <button className='cartButton'>
                <i className="fas fa-shopping-cart"></i>
                <span>  {cart.length}</span>
                </button>
            </div>
    )

}

