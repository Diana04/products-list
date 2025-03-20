import { Product } from '../products/types';

export type CartItem = {
    product: Product
    quantity: number;
}

export type CartContext = {
    items?: CartItem[];
    addCartItem: (product: Product) => void;
    removeCartItem: (product: Product) => void;
    totalQuantity?: number;
    totalPrice?: number;
    getCartItemById: (productId?: string) => CartItem | null;
}
