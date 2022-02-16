import React from "react";
import CounterBtn from "../ItemCount/ItemCount";
import {useState, useEffect} from 'react';
import './ItemList.css';
import Item from './Item';

const ItemList = (props) => {

    const [data, setData] = useState([]);
    const products = [
        {id:1, name:'Budha', description:'info prod1', price:2000, pictureUrl:'#'},
        {id:2, name:'Flora', description:'info prod2', price:2000, pictureUrl:'#'},
        {id:3, name:'Ra', description:'info prod3', price:2000, pictureUrl:'#'},
        {id:4, name:'Zeus', description:'info prod4', price:2000, pictureUrl:'#'}
    ];

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products);
        },3000);
    });
    
    useEffect(()=> {
        promise.then(result=>{
            console.log('result', result);
            setData(result);
        })    
    },[products]);

    const showMore = () =>{
        console.log('mostrar mas');
    }

    return(
        <>
        <div className="itemBox">
            {data.length === 0 ?
            <div>
                <h3 className="loading">cargando...</h3>
            </div>
            :
            data.map(product=>
            <div key={product.id} className="item">
                <div className="imgItem">Imagen del producto</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button onClick={showMore} className='showMoreButton'>Mostrar mas</button>
                <span>Stock: {props.stock}</span>
                <span>Costo: {product.price}</span>
                <span id="info"></span>
                <CounterBtn stock={props.stock} initial={1}/>
            </div>)}
        </div>
        </>
    )

}

export default ItemList;