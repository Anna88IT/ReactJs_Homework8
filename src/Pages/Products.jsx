import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {Item} from "../Components/Item";


export const Products = () => {
    const navigate = useNavigate();
    const brands = JSON.parse(localStorage.getItem("Products"));

    const goToItem = (item) => {
        navigate("/products/" + item);
    }

    return (

            <div className="products">
                { brands.map((brand) =>
                    <div key={brand.product} className="brand">
                        <p className="title">{brand.product}</p>
                        <img className="brandImg" src={brand.img} alt={brand.img} />
                        <button
                            className="viewAll"
                            onClick={() => (goToItem(brand.product)) }
                        >View all</button>
                    </div>
                )}

                <Routes>
                    <Route path="/products/:item" element={<Item />} />
                </Routes>
            </div>


    )
}