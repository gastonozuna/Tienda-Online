import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './CartWidget.css';

export const CartWidget = ({count}) => {

    const {cart} = useContext(CartContext);

        return(
            
            <div>
                <button className='cartButton'>
                <i className="fas fa-shopping-cart"></i>
                <span>  ({cart})</span>
                </button>
            </div>
    )

}

