import './CartWidget.css';
import {Link} from 'react-router-dom';

export const CartWidget = () => {

        return(
            
            <div>
                <button className='cartButton'>
                <i className="fas fa-shopping-cart"></i>
                <span>  (2)</span>
                </button>
            </div>
    )

}

