'use client'

import { useCallback, useContext, useEffect, useState } from 'react'
import { redirect } from 'next/navigation';
import Grid2 from '@mui/material/Grid2';

import { CartContext } from '@/modules/cart';

import { fetchProducts } from '../_api';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { ProductsSearchContext } from './ProductsSearchContext';

export const ProductsList = () => {
    const {addCartItem, removeCartItem, getCartItemById} = useContext(CartContext);
    const {filterParams, sortBy} = useContext(ProductsSearchContext);
    const [products, setProducts] = useState<Product[]>([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const fetchProductsData = async () => {
            setIsFetching(true);
            const data = await fetchProducts(filterParams, sortBy);
            setIsFetching(false)
            setProducts(data);
        }

        fetchProductsData();
    }, [setProducts, filterParams, sortBy]);

    const handleClick = useCallback((product: Product) => {
        redirect(`products/${product.id}`);
    }, []);

    if (isFetching) {
        return <div>Fetching...</div>
    }

    return (
        <Grid2 container spacing={1}>
            {products.map((product) => (
                <Grid2 size={4} key={product.id}>
                    <ProductCard
                        productData={product}
                        onClick={handleClick}
                        onAddToCart={addCartItem}
                        onRemoveFromCart={removeCartItem}
                        quantityInCart={getCartItemById(product.id)?.quantity || 0}
                    />
                </Grid2>
            ))}
        </Grid2>
    )
}
