import { useEffect, useState, } from "react";
import { ItemDetail } from "./ItemDetail";
import { dataProducts } from "../data/Productos";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState(undefined);
    const {id} = useParams();

    const getItems = (productId) => {

        return new Promise((resolve, reject)=>{
            const arrProducts = dataProducts;
            const foundProduct = arrProducts.find((element) => element.id === productId);
            setTimeout(()=>{
                resolve(foundProduct);
            },2000);
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
    
    console.log('parametro recibido', id);
    console.log('producto', product);

    return(
        <>
            <div className='ItemDetailCointainer'>
                <ItemDetail item={product} />
            </div>
        </>
    )

}

export default ItemDetailContainer;