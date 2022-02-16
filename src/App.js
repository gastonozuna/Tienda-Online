import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Header from './components/header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <React.Fragment>
      <NavBar/>
      <Header/>
      <ItemListContainer>
        
      </ItemListContainer>
    </React.Fragment>
  );
}

export default App;
