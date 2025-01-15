import React from 'react'
import FilterableProdTable from '../Components/Product/FilterableProdTable.jsx'
import { useSelector } from 'react-redux'

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const Product = () => {
    const dataProduct = useSelector((state) => state.product.dataProduct)
    return (
        <div>
            <h3>Mod 7: Practica 1</h3>
            <FilterableProdTable products={dataProduct} />
        </div>
    );
}

export default Product;
