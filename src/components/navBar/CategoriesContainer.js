import React from "react";
import './categories.css';
import { Link, useParams } from "react-router-dom";

export const CategoriesContainer = () => {

    const params = useParams();
    console.log(params);
    

    return(
        <>
        <div className="categoryBox">
            <h2>Categorias</h2>
        </div>
        </>
    )

}