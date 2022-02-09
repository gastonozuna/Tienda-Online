import React from 'react';
import './navBar.css';
import './categories';
import {CartWidget} from '../CartWidget/CartWidget';

const logo = require('./navBarImages/logoCogosaurio.png');

function NavBar() {

    return(

        <nav className='navBar'>
            <a href='#'/><div><img className='navLogo' src={logo}/></div><a/>
            <a href='#'/><div className='navButton'>Inicio</div><a/>
            <a href='#'/><div className='navButton' id='categories'>Categorias 
            </div><a/>
            <div className='categoriesBox'>
                <div className='catLinksBox'>
                <a href='#'>Categoria1</a>
                </div>
                <div className='catLinksBox'>
                <a href='#'>Categoria2</a>
                </div>
                <div className='catLinksBox'>
                <a href='#'>Categoria3</a>
                </div>
            </div>
            <div className='searchBox'>
            <input type='text' placeholder=' Buscar...'></input>
            <a href='#'/><div className='navSearchButton'><i className="fas fa-search"></i></div><a/>
            </div>
            <a href='#'/><div className='navButton'>Iniciar sesion/Registrarse</div><a/>
            <CartWidget/>
        
        </nav>

    )

}

export default NavBar;