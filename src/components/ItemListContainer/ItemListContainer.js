import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useState, useEffect} from 'react';
import { dataProducts } from '../data/Productos';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/loader';

const ItemListContainer = () => {

    const params = useParams();

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
