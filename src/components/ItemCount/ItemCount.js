import { useState } from "react";
import { Link } from "react-router-dom";
import './ItemCount.css';

const CounterBtn = (props) => {

    const [num, setNum] = useState(props.initial);
    const [itemToCart, setItemToCart] = useState({});
    
    const onAdd = () => {
        if(num < props.stock){
            setNum(num+1);
        }else {
            alert('MAXIMO STOCK');
        }
        
    };
    const onRemove = () => {
        if(num > props.initial){
            setNum(num-1);
        }
    };

    const counterBox = document.querySelector('.counterBox');
    const endBuyBox = document.querySelector('.endBuyBox');

    const addToCart = () => {
        console.log('add' , num, 'de', props.name);
        alert(`Agregaste ${num} de ${props.name} al carrito`)
        counterBox.style.display='none';
        endBuyBox.style.display='flex';
        setItemToCart({item: props.name, quantity: num});
        console.log(itemToCart);
    }


    return (
        <>
        <div className="counterBox">
            <div className="btnBox">
                <button className="counterBtn" id='buttonRemove' onClick={onRemove}>-</button>
                <p className="productNum">{num}</p>
                <button className="counterBtn" id='buttonAdd' onClick={onAdd}>+</button>
            </div>
            <button className="addToCartButton" onClick={()=>addToCart()} >Agregar al carrito</button>
        </div>

        <div className="endBuyBox">
            <Link to='/Cart'>
                <button className="endBuyButton">Terminar mi compra</button>
            </Link>
        </div>
        </>
    );
};

export default CounterBtn;