'use client'

import { ReactNode, useState } from 'react';

import { Product } from '@/modules/products';

import { CartContext } from './CartContext';
import { CartData, fetchCart, updateCartItem as updateCartItemRequest } from '../_api';

export const CartProvider = ({children}: {children: ReactNode}) => {
    const [cartData, setCartData] = useState<CartData>({});

    const updateCartItem = (product: Product, quantity: number) => {
        const makeRequest = async () => {
            updateCartItemRequest(product, quantity);
            const data = await fetchCart();
            setCartData(data);
        }

        makeRequest();
    }

    const addCartItem = (product: Product) => {
        if (cartData?.items?.length) {
            const cartItem = cartData.items.find(item => item.product.id === product.id);
            updateCartItem(product, cartItem ? cartItem.quantity += 1 : 1);
        }

        else {
            updateCartItem(product, 1)
        }
    }

    const removeCartItem = (product: Product) => {
        if (cartData?.items?.length) {
            const cartItem = cartData.items.find(item => item.product.id === product.id);

            if (cartItem) {
                updateCartItem(product, cartItem.quantity - 1);
            }
        }
    }

    const getCartItemById = (productId?: string) => {
        if (!productId || !cartData?.items?.length) {
            return null;
        }

        const cartItem = cartData.items.find(item => item.product.id === productId);

        return cartItem || null;
    };

    return (
        <CartContext.Provider value={{
            items: cartData.items,
            addCartItem,
            removeCartItem,
            totalPrice: cartData.totalPrice,
            totalQuantity: cartData.totalQuantity,
            getCartItemById,
        }}>
            {children}
        </CartContext.Provider>
    );
} 