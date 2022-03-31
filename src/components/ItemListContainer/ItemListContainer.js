import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useState, useEffect} from 'react';
import { dataProducts } from '../data/Productos';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../utils/firebase';

const ItemListContainer = () => {

    const {id} = useParams();

    const [items, setItems] = useState([]);
    
    /*const products = dataProducts;

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products);
        },1000);
    });
    
    useEffect(()=> {
        promise.then(result=>{
            setData(result);
        })
        .catch(console.log('error'));
    },[]);*/

    const getData = async () =>{

        try {
            const itemsCollection = collection(db, 'items');
            const col = await getDocs(itemsCollection);
            const result = col.docs.map(
                (doc)=> (doc = { id: doc.id, ...doc.data() })
            );
            setItems(result);
            console.log(result);
        } catch (error) {
            console.error('error', error)
        }
    }

    const getDataCategory_query = async () => {
        try{
            const q = query(collection(db, 'items'), where('categoryId', '==', id));
            const querySnaptshot = await getDocs(q);
            setItems(
                querySnaptshot.docs.map((doc) => (doc = {id: doc.id, ...doc.data() }))
            );
        } catch (error) {
            console.warn('error', error)
        }

    }

    useEffect(()=> {
        id ? getDataCategory_query() : getData();
    }, [id]);

        return(
            <>
                <div className='ItemListCointainer'> 
                    <ItemList data={items}/>
                </div>
            </>
        )   

}

export default ItemListContainer;
