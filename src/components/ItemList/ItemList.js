import './ItemList.css';
import Item from './Item';

const ItemList = (props) => {

    const products = props.data;
    
    
    return(
        <>
            <div className="itemBox">
                {props.data.length === 0 ?
                <div>
                    <span className="loading">cargando...</span>
                </div>
                :
                products.map(product=>

                    <Item id={product.id} name={product.name} description={product.description} 
                    price={product.price} img={product.pictureUrl} stock={product.stock}/>
                
                )}
            </div>
        </>
    )

}

export default ItemList;