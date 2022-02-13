import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Header from './components/header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CounterBtn from './components/ItemCount/ItemCount';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Header/>
      <ItemListContainer greeting='AQUI VAN A ESTAR LOS PRODUCTOS'>
        <CounterBtn name="Producto 1" info="info del producto 1" initial={1} stock={5}/>
        <CounterBtn name="Producto 2" info="info del producto 2" initial={1} stock={5}/>
        <CounterBtn name="Producto 3" info="info del producto 3" initial={1} stock={5}/>
        <CounterBtn name="Producto 4" info="info del producto 4" initial={1} stock={5}/>
      </ItemListContainer>
    </React.Fragment>
  );
}

export default App;
