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
                console.log('found',foundProduct);
            },1000);
        })

    }

    useEffect(()=>{
        const getProduct = async (id) => {
            const response = await getItems(id);
            console.log('respuesta', response);
            setProduct(response);
        }
        getProduct(id)
    }, [id]);
    
    console.log('product',product);
    return(
        <>
            <div className='ItemDetailCointainer'>
                <ItemDetail item={product} initial={1} />
            </div>
        </>
    )

}

export default ItemDetailContainer;