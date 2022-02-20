import './ItemDetail.css';
export const ItemDetail = ({item}) => {

    return(
        <div>
            <h3>{item.name}</h3>
            <p>{item.desctiption}</p>
            <span>{item.price}</span>
        </div>        
    )

}
