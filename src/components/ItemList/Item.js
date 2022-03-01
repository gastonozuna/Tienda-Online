import { useState } from "react";
import { Link } from "react-router-dom";

const Item = (props) => {

    const [inCart, setInCart] = useState('');

    const onAdd = (count) => {
        setInCart(count);
        console.log('onAdd', count);
    }

    return(
        <>
            <div className="item">
                <img src={props.img} className="imgItem" alt="Imagen del producto"></img>
                <h3>{props.name}</h3>
                <p className="itemDescription">{props.description}</p>
                <span>Stock: {props.stock}</span>
                <span>Costo: ${props.price}</span>
                <Link to={`/items/${props.id}`}>
                    <button id={props.id} className='showMoreButton'>Detalles</button>
                </Link>
                
            </div>
        </>
    )

}

export default Item;