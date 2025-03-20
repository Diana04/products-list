'use client'

import { createContext } from 'react';

import {
    ProductsSortValues,
    type ProductsSearchContext as ProductsSearchContextType
} from '../types';

export const ProductsSearchContext = createContext<ProductsSearchContextType>({
    filterParams: {},
    sortBy: ProductsSortValues.DEFAULT,
    setFilterParam: () => {},
    setSortValue: () => {},
});
