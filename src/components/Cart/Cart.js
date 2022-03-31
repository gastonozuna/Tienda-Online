import React, { useContext, useState} from 'react';
import { CartContext } from '../Context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import { collection, Timestamp, addDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Cart = () => {

    const {cart} = useContext(CartContext);
    const {deleteItemById} = useContext(CartContext);
    const {clearCart} = useContext(CartContext);

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
                    console.log('docref', docRef.id);

                    e.target[0].value = "";
                    e.target[1].value = "";
                    e.target[2].value = ""; 

                    notify(buyer, docRef);
                    
                }
                
            } catch(error){
                console.log('error', error);
            }
            
        }
        
    const notify = (buyer, info) => toast(`Compra realizada. Muchas gracias ${buyer.name}! - El id de la orden es: ${info.id}`);

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

                    <button type='submit' >Finalizar compra</button>
                    <ToastContainer position="top-center"
                        autoClose={5000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />   
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
            <p>Vuelve al menu principal para seleccionar un producto</p>
        </div>
        </>
    )
    
}