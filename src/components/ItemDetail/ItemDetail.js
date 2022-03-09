import CounterBtn from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

export const ItemDetail = ({item}) => {

    const [cartItems , setCartItems] = useState(0);
    const {addItem} = useContext(CartContext);
    
    const cartContext = useContext(CartContext);
    const {cart, addToCart} = cartContext;

    const onAddItem = (quantity) => {
        addToCart(item, quantity);
    }

    return(
        <>
        <div className='ItemDetail'>
            <img src={item.pictureUrl}></img>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.info}</p>
            <span>Stock: {item.stock}</span>
            <span>Costo: ${item.price}</span>
            <CounterBtn stock={item.stock} name={item.name}
              initial={1} onAddItem={onAddItem}/>
        </div>
        </>
    )

}
