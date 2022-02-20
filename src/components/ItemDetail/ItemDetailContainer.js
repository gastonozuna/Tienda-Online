import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = ({items}) => {

    const [itemDetail, setItemDetail] = useState([]);

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(items);
        }, 2000);
    })
    
    const getItems = () =>{
        items.map((item)=>{
            console.log(item);
        });
    }
    useEffect(()=>{
        promise.then(result=>{
            setItemDetail(result);
        })
    }, []);
    

    getItems();
    return(
        <>
            <ItemDetail item={items} name={items.name}/>
        </>
    )

}