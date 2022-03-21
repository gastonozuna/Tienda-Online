import { useEffect, useState, } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

/* firebase */

import { getDocs, doc, getDoc} from "firebase/firestore";
import { db } from "../utils/firebase";

export const ItemDetailContainer = () => {
    
    const {id} = useParams();

    /*db FireBase*/

    const [product, setProduct] = useState([]);

    useEffect(()=> {
        const query = doc(db, 'items', id);

        getDoc(query).then((doc) => {
            const data = doc.data();
            const data_final = { id, ...data };
            setProduct(data_final);
        })

    }, [id]);
    
    
    return(
        <>
            <div className='ItemDetailCointainer'>
                <Link to='/'>
                    <button className='backButton'>
                        <i className="far fa-arrow-alt-circle-left"></i> Volver
                    </button>
                </Link>

                <ItemDetail item={product} initial={1} />
            </div>
        </>
    )

}

export default ItemDetailContainer;