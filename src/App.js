import React, {useState} from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Header from './components/header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Cart} from './components/Cart/Cart';
import CartProvider, { CartContext } from './components/Context/CartContext';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/items/:id' element={<ItemDetailContainer/>}/>
          <Route path={'/category/:id'} element={<ItemListContainer/>}/>
          <Route path='/Cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
