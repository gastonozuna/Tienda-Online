import { useEffect, useState, } from "react";
import { ItemDetail } from "./ItemDetail";
import { dataProducts } from "../data/Productos";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

/* firebase */

import { getDocs, doc, getDoc} from "firebase/firestore";
import { db } from "../utils/firebase";

export const ItemDetailContainer = () => {
    
    const {id} = useParams();

    /*db FireBase*/

    const [selectedItem, setSelectedItem] = useState();
    const [products, setProducts] = useState([]);

    const getSelectedItem = async () =>{

        try {
            const document = doc(db, 'items', id);
            const response = await getDoc(document);
            const result = {id: response.id, ...response.data()};
            setSelectedItem(result.filter(e=> e.id === id));
            console.log(result);
        } catch (error) {
            console.error('error', error)
        }
        
        useEffect(()=> {
            getSelectedItem();
        }, [id]);
        
    }
    /*const getItems = (productId) => {

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
            setSelectedItem(response);
        }
        getProduct(id)
    }, [id]);*/
    
    return(
        <>
            <div className='ItemDetailCointainer'>
            <Link to='/'>
                <button className='backButton'><i className="far fa-arrow-alt-circle-left"></i> Volver</button>
            </Link>
                <ItemDetail item={selectedItem} initial={1} />
            </div>
        </>
    )

}

export default ItemDetailContainer;