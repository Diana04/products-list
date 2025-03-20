'use client'

import { createContext } from 'react';

import { CartContext as CartContextType } from '../types';

export const CartContext = createContext<CartContextType>({
    items: [],
    addCartItem: () => {},
    removeCartItem: () => {},
    totalQuantity: 0,
    totalPrice: 0,
    getCartItemById: () => null,
});
