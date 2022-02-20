import CounterBtn from "../ItemCount/ItemCount";

const Item = (props) => {

    const showMore = () =>{
        console.log('mostrar mas de: ', props.id);
    }

    return(
        <>
            <div className="item">
                <img src={props.img} className="imgItem" alt="Imagen del producto"></img>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <button onClick={showMore} className='showMoreButton'>Mostrar mas</button>
                <span>Stock: {props.stock}</span>
                <span>Costo: {props.price}</span>
                <span id="info"></span>
                <CounterBtn stock={props.stock} initial={1} name={props.name}/>
            </div>
        </>
    )

}

export default Item;