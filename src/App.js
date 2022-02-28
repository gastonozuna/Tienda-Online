import './App.css';
import NavBar from './components/navBar/NavBar';
import Header from './components/header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Cart} from './components/Cart/Cart';
import { CartProvider } from './components/Context/CartContext';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/items/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/Cart' element={<Cart/>}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
