import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useState, useEffect, useContext} from 'react';
import { dataProducts } from '../data/Productos';
import { CartContext } from '../Context/CartContext';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const params = useParams();
    console.log('useParams',params);

    const contextoGlobal = useContext(CartContext);
    console.log('contexto: ', contextoGlobal);

    const [data, setData] = useState([]);
    const products = dataProducts;

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products);
        },1000);
    });
    
    useEffect(()=> {
        promise.then(result=>{
            setData(result);
        })
        .catch(console.log('error'));
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
