import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import Item from '../ItemList/ItemList';

const ItemListContainer = () => {

        return(
            <>
            <div className='ItemListCointainer'> 
                <ItemList initial={1} stock={5} item={Item}/>
            </div>
            </>
        )   

}


export default ItemListContainer;
