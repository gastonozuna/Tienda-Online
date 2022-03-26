import React, { useContext, useState} from 'react';
import { CartContext } from '../Context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import { collection, Timestamp, addDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

export const Cart = () => {

    const {cart} = useContext(CartContext);
    const {deleteItemById} = useContext(CartContext);
    const {clearCart} = useContext(CartContext);

    
    let formCart = document.querySelector('.formCart');
    

    const sendOrder = async (e) => {
        try{
            
            e.preventDefault();
            let buyer = {
                name: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value
                }
                
                console.log(buyer);

                if(buyer.name === "" || buyer.phone === "" || buyer.email === ""){
                    alert('Por favor complete todos los campos');
                }else{

                    let order = {
                        buyer,
                        items: cart,
                        total: cart.reduce((acum, item)=> acum + (item.price * item.quantity),0)
                    }
                    
                    order.date = Timestamp.fromDate(new Date());
                    const queryCollection = collection(db, 'orders');
                    console.log('order', order);
                    const docRef = await addDoc(queryCollection, order)
                    console.log('docref', docRef);

                    e.target[0].value = "";
                    e.target[1].value = "";
                    e.target[2].value = "";
                }
                
        } catch(error){
            console.log('error', error);
        }

    }
 

    if(cart.length !== 0){
        return(
            <>
            <Link to='/'>
            <button className='backButton'><i className="far fa-arrow-alt-circle-left"></i> Volver</button>
            </Link>
            

            <div className='dataCart'>
                <p className='cartData'>Productos en carrito: {cart.length}</p>
                <p className='cartData'>Precio total: ${cart.reduce((acum, item)=> acum + (item.price * item.quantity),0)}</p>
                
                <div>
                    <button className='clearCart' onClick={clearCart}>Limpar Carrito</button>
                    {//<button className='endBuy' onClick={()=> console.log('nada')}>Finalizar Compra</button>
                    }
                </div>
            
            <h2>Carrito </h2>
            </div>

            <div className='cartBox'>

            <div className='cartItems'>

                {cart.map((item)=> {return(
                    <div className='itemInCart'>
                        <div className='itemPic'>
                            <img src={item.pictureUrl}></img>
                        </div>

                        <div className='itemOrder'>
                            <div className='itemInfo'>
                            <h3>{item.name}</h3>
                            <span> Cantidad: {item.quantity}</span>
                            <span>Precio por unidad: ${item.price}</span>
                            <span> Costo: ${item.price * item.quantity}</span>
                            </div>
                            <button className='deleteItem' onClick={()=>deleteItemById(item.id)}>x</button>
                        </div>
                    </div>
                )})}
            </div>
            
            <div className="formCart">
                 <form onSubmit={sendOrder}>
                    <h4>Tus datos</h4>
                    <input type='text' placeholder='Nombre'></input>
                    <input type='tel' placeholder='Telefono'></input>
                    <input type='email' placeholder='Correo'></input>

                    <button type='submit'>Finalizar compra</button>    
                 </form>
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