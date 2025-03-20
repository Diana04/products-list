'use client'

import { memo, MouseEvent } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import { AddToCartButton } from '@/shared/ui/add-to-cart-button';
import { Product } from '../types';

type Props = {
    productData: Product;
    onClick: (product: Product) => void;
    onAddToCart: (product: Product) => void;
    onRemoveFromCart: (product: Product) => void;
    quantityInCart: number;
}

export const ProductCard = memo(function ProductCard({
    productData,
    onClick,
    onAddToCart,
    onRemoveFromCart,
    quantityInCart,
}: Props) {

    const handleCardActionsClick = (e: MouseEvent) => {
        e.stopPropagation();
    }

    return (
        <Card variant='outlined'>
            <Box
                onClick={() => onClick(productData)}
                sx={theme => ({
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                    },
                })}
            >
                <CardContent sx={{ position: 'relative' }}>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {productData.brand}
                    </Typography>
                    <Typography variant='h5' component='div' mb={1}>
                        {productData.name}
                    </Typography>
                    <Typography sx={{ color: 'green', fontWeight: 'bold' }}>
                        ${productData.price}
                    </Typography>
                    {productData.isNew && <Chip
                        label="New"
                        color="primary"
                        size="small"
                        sx={theme => ({
                            position: 'absolute',
                            top: theme.spacing(1),
                            right: theme.spacing(1)
                        })}
                    />}
                </CardContent>

                <CardActions disableSpacing onClick={handleCardActionsClick}>
                    <AddToCartButton
                        isAdded={quantityInCart > 0}
                        onAddToCart={() => onAddToCart(productData)}
                        quantity={quantityInCart}
                        onDecrease={() => onRemoveFromCart(productData)}
                        onIncrease={() => onAddToCart(productData)}
                    />
                </CardActions>
          </Box>
        </Card>
    )
});
