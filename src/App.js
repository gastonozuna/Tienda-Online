import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Header from './components/header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';

function App() {

  return (
    <React.Fragment>
      <NavBar/>
      <Header/>
      <ItemListContainer/>
    </React.Fragment>
  );
}

export default App;
