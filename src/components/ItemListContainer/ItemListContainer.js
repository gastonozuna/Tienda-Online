import './ItemListContainer.css';

const ItemListContainer = ({greeting, children}) => {

        return(
            <>
            <div className='ItemListCointainer'>    
                {children[0]}
                {children[1]}
                {children[2]}
                {children[3]}
            </div>
            </>
        )   

}


export default ItemListContainer;
