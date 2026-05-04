import React from 'react'
import { data } from '../data/data'
import "./css_codes/ProductDetail.css"
import { useParams, NavLink } from 'react-router-dom'
export default function ProductDetail() {
    const { id } = useParams();
    const Item = data.find((item) => item.id === Number(id));
    console.log(Item);
    return (

        <div className="item">
            <NavLink to="/products">
                <button> ← Back to Products</button>
            </NavLink >
            <div className="productdetail">
                <img src={Item.link} alt={Item.name} />
                <h2>{Item.name}</h2>
                <p>{Item.type}</p>
                <p>Price: ${Item.price.toFixed(2)}</p>
            </div>
        </div>
    )
}
