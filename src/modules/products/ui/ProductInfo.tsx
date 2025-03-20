'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Stack, Typography } from '@mui/material';

import { Product } from '../types';
import { fetchProductById } from '../_api';

export const ProductInfo = () => {
    const params = useParams<{productId: string}>();
    const [productData, setProductData] = useState<Product | null>(null);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            setIsFetching(true);
            const data = await fetchProductById(params.productId);
            setIsFetching(false)
            setProductData(data);
        }

        fetchProduct();
    }, [setProductData, setIsFetching, params]);

    if (isFetching) {
        return <div>Fetching...</div>
    }

    if (!productData) {
        return <div>Product does not exist</div>
    }

    return (
        <Stack sx={{ position: 'relative' }}>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {productData?.brand}
            </Typography>
            <Typography variant='h5' component='div' mb={1}>
                {productData?.name}
            </Typography>
            <Typography sx={{ color: 'green', fontWeight: 'bold' }}>
                ${productData?.price}
            </Typography>
        </Stack>
    )
} 