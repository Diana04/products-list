import { Product } from '@/modules/products';

import { CartItem } from './types';

export type CartData = {
    items?: CartItem[];
    totalQuantity?: number;
    totalPrice?: number;
}

let cartData: CartData = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
}

export const fetchCart = (): Promise<CartData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cartData);
        }, 100);
    });
};

const getTotalPrice = (cartItems: CartItem[]) =>
    cartItems.reduce((acc, item) => {
        return acc += (item.product.price * item.quantity)
    }, 0);

const getTotalQuantity = (cartItems: CartItem[]) =>
    cartItems.reduce((acc, item) => {
        return acc += item.quantity
    }, 0);

const addCartItem = (product: Product, quantity: number) => {
    const cartItems = [...cartData.items];
    const cartItem = cartItems.find(item => item.product.id === product.id);

    if (cartItem) {
        cartItem.quantity = quantity;
    } else {
        cartItems.push({
            product,
            quantity: quantity,
        })
    }

    cartData = {
        items: cartItems,
        totalPrice: getTotalPrice(cartItems),
        totalQuantity: getTotalQuantity(cartItems)
    }
}

const removeCartItem = (product: Product) => {
    let cartItems = [...cartData.items];
    const cartItem = cartItems.find(item => item.product.id === product.id);

    if (cartItem) {
        cartItems = cartItems.filter(item => item.product.id !== product.id)

        cartData = {
            items: cartItems,
            totalPrice: getTotalPrice(cartItems),
            totalQuantity: getTotalQuantity(cartItems)
        }
    }
}

export const updateCartItem = (product: Product, quantity: number) => {
    if (quantity > 0) {
        addCartItem(product, quantity);
    } else {
        removeCartItem(product);
    }
};
