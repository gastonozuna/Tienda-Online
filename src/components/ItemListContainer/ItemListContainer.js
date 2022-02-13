import './ItemListContainer.css';

const ItemListContainer = ({greeting, children}) => {

        return(
            <>
            <div className='ItemListCointainer'>    
                {children}
            </div>
            </>
        )   

}


export default ItemListContainer;
