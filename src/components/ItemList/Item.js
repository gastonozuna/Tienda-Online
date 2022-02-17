import CounterBtn from "../ItemCount/ItemCount";

const Item = (props) => {

    const showMore = () =>{
        console.log('mostrar mas de: ', props.name)
    }

    return(
        <>
            <div key={props.key} className="item">
                <div className="imgItem">Imagen del producto</div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <button onClick={showMore} className='showMoreButton'>Mostrar mas</button>
                <span>Stock: {props.stock}</span>
                <span>Costo: {props.price}</span>
                <span id="info"></span>
                <CounterBtn stock={props.stock} initial={1}/>
            </div>
        </>
    )

}

export default Item;