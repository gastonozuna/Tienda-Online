import CounterBtn from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

export const ItemDetail = ({item}) => {

    console.log('item', item)

    const [cartItems , setCartItems] = useState(0);
    const {addItem} = useContext(CartContext);
    
    const onAdd = (quantity) => {
        console.log('onAdd', quantity);
    }


    return(
        <>
        <Link to='/'>
            <button className='backButton'><i className="far fa-arrow-alt-circle-left"></i> Volver</button>
        </Link>
        <div className='ItemDetail'>
            <img src={item.pictureUrl}></img>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.info}</p>
            <span>Stock: {item.stock}</span>
            <span>Costo: ${item.price}</span>
            <CounterBtn stock={item.stock} name={item.name}
              initial={1} onAddItem={onAdd}/>
        </div>
        </>
    )

}
