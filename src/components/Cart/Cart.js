import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

export const Cart = () => {

    const {cart} = useContext(CartContext);
    const {deleteItemById} = useContext(CartContext);
    const {clearCart} = useContext(CartContext);

    const [total, setTotal] = useState(0); //para la suma total

    if(cart.length !== 0){
        return(
            <>
            <Link to='/'>
            <button className='backButton'><i className="far fa-arrow-alt-circle-left"></i> Volver</button>
            </Link>


            <div className='cartBox'>
                <h2>Carrito </h2>
                {cart.map((item)=> {return(
                    <div className='itemInCart'>
                        <div className='itemPic'>
                        <img src={item.pictureUrl}></img>
                        </div>
                        <div className='itemInfo'>
                        <h3>{item.name}</h3>
                        <span> Cantidad: {item.quantity}</span>
                        <span>Precio por unidad: ${item.price}</span>
                        <span> Costo: ${item.price * item.quantity}</span>
                        <button className='deleteItem' onClick={()=>deleteItemById(item.id)}><i class="fa-solid fa-trash-can">Eliminar</i></button>
                        </div>
                    </div>
                )})}
            </div>
            
            <div className='dataCart'>
                <p className='cartData'>Productos en carrito: {cart.length}</p>
                <p className='cartData'>Precio total: ${cart.reduce((acum, item)=> acum + (item.price * item.quantity),0)}</p>
                
                <div>
                    <button className='clearCart' onClick={clearCart}>Limpar Carrito</button>
                    <button className='endBuy' onClick={()=> console.log('Fin de compra')}>Finalizar Compra</button>
                </div>
            </div>
            </>
        )
    }

    return(
        <>
        <div className="cartEmptyBox">
        <Link to='/'>
            <button className='backButton'><i className="far fa-arrow-alt-circle-left"></i> Volver</button>
        </Link>
            <h2>Carrito </h2>
            <p>El carrito esta vacío :(</p>
        </div>
        </>
    )
    
}