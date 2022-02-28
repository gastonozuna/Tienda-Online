import CounterBtn from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';

export const ItemDetail = ({item}) => {

    return(
        <>
        <Link to='/'>
            <button className='backButton'>Volver</button>
        </Link>
        <div className='ItemDetail'>
            <img src={item.pictureUrl}></img>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.info}</p>
            <span>Stock: {item.stock}</span>
            <span>Costo: {item.price}</span>
            <CounterBtn stock={item.stock} initial={1} name={item.name}/>
        </div>
        </>
    )

}
