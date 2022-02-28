import './CartWidget.css';

export const CartWidget = ({count}) => {

        return(
            
            <div>
                <button className='cartButton'>
                <i className="fas fa-shopping-cart"></i>
                <span>  ({count})</span>
                </button>
            </div>
    )

}

