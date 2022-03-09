import { useEffect, useState, } from "react";
import { ItemDetail } from "./ItemDetail";
import { dataProducts } from "../data/Productos";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const {id} = useParams();

    const getItems = (productId) => {

        return new Promise((resolve, reject)=>{
            const arrProducts = dataProducts;
            const foundProduct = arrProducts.find((element) => element.id === productId);
            setTimeout(()=>{
                resolve(foundProduct);
            },1000);
        })

    }

    useEffect(()=>{
        const getProduct = async (id) => {
            const response = await getItems(id);
            setProduct(response);
        }
        getProduct(id)
    }, [id]);
    
    return(
        <>
            <div className='ItemDetailCointainer'>
                <ItemDetail item={product} initial={1} />
            </div>
        </>
    )

}

export default ItemDetailContainer;