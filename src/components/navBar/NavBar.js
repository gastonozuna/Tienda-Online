import React from 'react';
import './navBar.css';
import {CartWidget} from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom';

const logo = require('./navBarImages/logoCogosaurio.png');

function NavBar() {

    const showCategories = () => {
        
        let display = false;
        const categoriesBox = document.querySelector('.categoriesBox');
        console.log('click en', categoriesBox);
        if(display === false){
            categoriesBox.style.display='block';
            display = true;
        }else {
            categoriesBox.style.display='none';
            display = false;
        }


    }

    return(

        <nav className='navBar'>
            <Link to='/'>
                <a href='#'/><div><img className='navLogo' src={logo}/></div><a/>
            </Link>
            <NavLink to='/' className='navButton' activeclassname='active'>Inicio</NavLink>
            <a href='#'/><div onClick={showCategories} className='navButton' id='categories'>Categorias 
            </div><a/>
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
                <CartWidget/>
            </NavLink>
        
        </nav>

    )

}

export default NavBar;