import CounterBtn from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = (props) => {

    const showMore = (e) =>{
        console.log(e.target);
    }

    return(
        <>
            <div className="item">
                <img src={props.img} className="imgItem" alt="Imagen del producto"></img>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <Link to='/items'>
                    <button id={props.id} className='showMoreButton'>Detalles</button>
                </Link>
                <span>Stock: {props.stock}</span>
                <span>Costo: {props.price}</span>
                <span id="info"></span>
                <CounterBtn stock={props.stock} initial={1} name={props.name}/>
            </div>
        </>
    )

}

export default Item;