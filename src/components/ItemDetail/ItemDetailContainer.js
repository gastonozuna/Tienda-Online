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
            console.log('respuesta', response);
            setProduct(response);
        }
        console.log(product);
        getProduct(id)
    }, [id]);

    return(
        <>
            <div className='ItemDetailCointainer'>
                <ItemDetail item={product} />
            </div>
        </>
    )

}

export default ItemDetailContainer;