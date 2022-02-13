import { useState } from "react";
import './ItemCount.css';

const CounterBtn = (props) => {

    const [num, setNum] = useState(props.initial);
    let addToCartButton = document.querySelector('.addToCartButton');
    let buttonMore = document.querySelector('#buttonMore');
    let buttonLess = document.querySelector('#buttonLess');
    
    const onAdd = () => {
        setNum(num+1);
        if(num == props.stock){
            buttonMore.setAttribute('disabled', true);
        } 
    };
    const onRemove = () => {
        setNum(num-1);
        if(num == props.initial){
            buttonLess.setAttribute('disabled', true);
        }
    };

    return (
        <div className="counterBox">
            <h3>{props.name}</h3>
            <p className="productInfo">{props.info}</p>
            <div className="btnBox">
                <button className="counterBtn" id='buttonLess' onClick={onRemove}>-</button>
                <p className="productNum">{num}</p>
                <button className="counterBtn" id='buttonMore' onClick={onAdd}>+</button>
            </div>
            <button className="addToCartButton">Agregar al carrito</button>
        </div>
    );
};

export default CounterBtn;