import  React from "react";
import { Product } from "./product";
import { useState } from "react";
import ProductosNav from "./productosNav";
import { ProductList as initialProducts } from "./productList";

export const Filter= () =>{
    const [ProductList] = useState(initialProducts)
    const [filters, setFilters] = useState ({
        category: 'all',
        minPrice : 0
    })
    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice && (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        })

    }

    const filteredProducts = filterProducts(products)

    return (
     <ProductList product={filteredProducts} />

    )

}

export default Filter