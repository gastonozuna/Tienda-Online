import { collection, getDocs } from "firebase/firestore";
import { cloneElement, useEffect } from "react";
import { db } from "../utils/firebase";

export const dataBase = () => {

    useEffect(()=> {
        const getData = async () =>{
            const query = collection(db,'items');
            const response = await getDocs(query);
            console.log(response);
        }

        getData()
    })

}