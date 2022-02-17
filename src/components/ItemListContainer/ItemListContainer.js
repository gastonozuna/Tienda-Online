import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useState, useEffect} from 'react';

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const products = [
        {id:1, name:'Budha', description:'info prod1', price:2000, pictureUrl:'#', stock:5},
        {id:2, name:'Flora', description:'info prod2', price:2000, pictureUrl:'#', stock:5},
        {id:3, name:'Ra', description:'info prod3', price:2000, pictureUrl:'#', stock:5},
        {id:4, name:'Zeus', description:'info prod4', price:2000, pictureUrl:'#', stock:5}
    ];

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products);
        },3000);
    });
    
    useEffect(()=> {
        promise.then(result=>{
            setData(result);
        })    
    },[data]);

        return(
            <>
            <div className='ItemListCointainer'> 
                <ItemList data={data}/>
            </div>
            </>
        )   

}


export default ItemListContainer;
