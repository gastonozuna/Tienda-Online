import { useState } from "react";
import './ItemCount.css';

const CounterBtn = (props, {handleCart}) => {

    const [num, setNum] = useState(props.initial);
    
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

    const addToCart = () => {
        console.log('add' , num, 'de', props.name);
        /*let inCart = {itemName: props.name, quantity: num}
        return(inCart);*/
    }


    return (
        <div className="counterBox">
            <div className="btnBox">
                <button className="counterBtn" id='buttonRemove' onClick={onRemove}>-</button>
                <p className="productNum">{num}</p>
                <button className="counterBtn" id='buttonAdd' onClick={onAdd}>+</button>
            </div>
            <button className="addToCartButton" onClick={()=>addToCart} >Agregar al carrito</button>
        </div>
    );
};

export default CounterBtn;