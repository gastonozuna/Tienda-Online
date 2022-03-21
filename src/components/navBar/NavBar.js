import React, {useContext} from 'react';
import './navBar.css';
import {CartWidget} from '../CartWidget/CartWidget';
import {BrowserRouter, Link, NavLink, Route, Routes} from 'react-router-dom';
import { CartContext } from '../Context/CartContext'; 

const logo = require('./navBarImages/logoCogosaurio.png');

function NavBar() {

    const showCategories = () => {
    
        const categoriesBox = document.querySelector('.categoriesBox');

        if(categoriesBox.style.display === 'none'){
            categoriesBox.style.display='block';
        }else if(categoriesBox.style.display === 'block'){
            categoriesBox.style.display='none';
        }

    }

    return(

        <nav className='navBar'>
            <Link to='/'>
                <div><img className='navLogo' src={logo}/></div>
            </Link>
            <NavLink to='/' className='navButton' activeclassname='active'>Inicio</NavLink>

            <Link to='/items/categoryId'>
            <div  className='navButton' id='categories'>Sustratos 
            </div>
            </Link>

            <Link to='/items/categoryId'>Fertilizantes</Link>
            <div className='categoriesBox'>
                
                
                <div className='catLinksBox'>
                <a href='#'>Namaste</a>
                </div>
               
                
                <div className='catLinksBox'>
                <a href='#'>Melaca Dorada</a>
                </div>
                
                <div className='catLinksBox'>
                <a href='#'>Otros</a>
                </div>
            
            </div>
            <div className='searchBox'>
            <input type='text' placeholder=' Buscar...'></input>
            <a href='#'/><div className='navSearchButton'><i className="fas fa-search"></i></div><a/>
            </div>
            <Link to='/' className='navButton' >Iniciar sesion/Registrarse</Link>
            <NavLink to='/Cart' activeclassname='active'>
                <CartWidget count={0}/>
            </NavLink>
        
        </nav>

    )

}

export default NavBar;