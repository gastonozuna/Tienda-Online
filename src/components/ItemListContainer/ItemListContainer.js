import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useState, useEffect} from 'react';
import budhaImg from '../ItemListContainer/productsImages/budhaProduct.png';
import floraImg from '../ItemListContainer/productsImages/floraProduct.png';
import raImg from '../ItemListContainer/productsImages/raProduct.png';
import zeusImg from '../ItemListContainer/productsImages/zeusProduct.png';
import { ItemDetailContainer } from '../ItemDetail/ItemDetailContainer';

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const products = [
        {id:1, name:'Budha', description:'info prod1', price:2000, pictureUrl:{budhaImg}, stock:5},
        {id:2, name:'Flora', description:'info prod2', price:2000, pictureUrl:{floraImg}, stock:5},
        {id:3, name:'Ra', description:'info prod3', price:2000, pictureUrl:{raImg}, stock:5},
        {id:4, name:'Zeus', description:'info prod4', price:2000, pictureUrl:{zeusImg}, stock:5}
    ];

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
                <ItemDetailContainer items={data}/>
            </div>
            </>
        )   

}

export default ItemListContainer;
