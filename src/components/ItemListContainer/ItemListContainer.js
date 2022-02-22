import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useState, useEffect} from 'react';
import { dataProducts } from '../data/Productos';

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const products = dataProducts;

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products);
        },2000);
    });
    
    useEffect(()=> {
        promise.then(result=>{
            setData(result);
        })    
    },[]);

        return(
            <>
            <div className='ItemListCointainer'> 
                <ItemList data={data}/>
            </div>
            </>
        )   

}

export default ItemListContainer;
