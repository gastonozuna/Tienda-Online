import { useState } from "react";
import './ItemCount.css';

const CounterBtn = (props) => {

    const [num, setNum] = useState(props.initial);
    let stockNum = document.querySelectorAll('#stockNum');
    // clase promises 01:01:24
    
    const onAdd = () => {
        if(num < props.stock){
            setNum(num+1);
        }else {
            alert('MAXIMO STOCK');
            stockNum.style.color = 'red';
        }
        
    };
    const onRemove = () => {
        if(num > props.initial){
            setNum(num-1);
        }
    };

    const addToCart = () => {
        console.log('add' , num)
    }


    return (
        <div className="counterBox">
            <h3>{props.name}</h3>
            <p className="productInfo">{props.info}</p>
            <span id="stockNum">Stock: {props.stock}</span>
            <div className="btnBox">
                <button className="counterBtn" id='buttonRemove' onClick={onRemove}>-</button>
                <p className="productNum">{num}</p>
                <button className="counterBtn" id='buttonAdd' onClick={onAdd}>+</button>
            </div>
            <button className="addToCartButton" onClick={addToCart} >Agregar al carrito</button>
        </div>
    );
};

export default CounterBtn;