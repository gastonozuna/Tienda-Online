import './Item.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Item = (props) => {
  
        return(
            <div className='item'>
                <h3>{props.name}</h3>
                <p>{props.info}</p>
                <span>$ {props.price}</span>
            </div>
        )   
    }

export default Item;