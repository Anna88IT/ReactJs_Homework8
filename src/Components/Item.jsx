import React from "react";
import { useParams } from "react-router-dom";

export const Item = () => {
    const { item } = useParams();
    const items = JSON.parse(localStorage.getItem("Items"));

    return(
        <div className="item">
            {items.map(product =>
                    product.brand === item &&
                <div className="fullContainer">
                    <h2> {product.brand + " " + product.name}</h2>
                    <div className="itemContainer" key={product.id}>

                        <img className="itemImg" src={product.img} alt={product.brand}/>
                        <div className="item_right">
                            <h4>Price: {product.price + " AMD"}</h4>
                            <p className="description"><strong>Processor: </strong> {product.processor}</p>
                            <p className="description"> <strong>Screen: </strong>  {product.screen}</p>
                            <p className="description"> <strong>Display: </strong> {product.display}</p>
                            <p className="description"> <strong>Camera: </strong> {product.camera}</p>
                            <p className="description"> <strong>Front camera: </strong> {product.frontCamera}</p>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}