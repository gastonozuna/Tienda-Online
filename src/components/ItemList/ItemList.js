import './ItemList.css';
import Item from './Item';
import { Loader } from '../Loader/loader';

const ItemList = (props) => {

    const products = props.data;
    
    return(
        <>
            <div className="itemBox">
                {props.data.length === 0 ?
                <div>
                    <Loader/>
                </div>
                :
                products.map(product=>

                    <Item key={product.id} id={product.id} name={product.title} description={product.description} 
                    price={product.price} img={product.pictureUrl} stock={product.stock} info={product.info} category={product.category}/>
                
                )}
            </div>
        </>
    )

}

export default ItemList;