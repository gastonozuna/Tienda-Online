import { useState } from "react";
import { Link } from "react-router-dom";
import './ItemCount.css';


const CounterBtn = ({stock, initial, onAddItem}) => {

    const [count, setCount] = useState(initial);

    const onAdd = () => {
        if(count < stock){
            setCount(count+1);
        }else {
            alert('MAXIMO STOCK');
        }
        
    };

    const onRemove = () => {
        if(count > initial){
            setCount(count-1);
        }
    };
    
    const counterBox = document.querySelector('.counterBox');
    const endBuyBox = document.querySelector('.endBuyBox');
    
    const endBuy = () => {
        counterBox.style.display = 'none';
        endBuyBox.style.display = 'flex';
    }

    return (
        <>
        <div className="counterBox">
            <div className="btnBox">
                <button className="counterBtn" id='buttonRemove' onClick={onRemove}>-</button>
                <p className="productNum">{count}</p>
                <button className="counterBtn" id='buttonAdd' onClick={onAdd}>+</button>
            </div>
            <button className="addToCartButton" onClick={()=> {onAddItem(count); endBuy()}} > Agregar al carrito</button>
        </div>

        <div className="endBuyBox">
            <Link to='/'>
                <button className="endBuyButton">Seguir comprando</button>
            </Link>
            <Link to='/Cart'>
                <button className="endBuyButton"><i className="fas fa-shopping-cart"></i>  Terminar mi compra</button>
            </Link>
        </div>
        </>
    );
};

export default CounterBtn;