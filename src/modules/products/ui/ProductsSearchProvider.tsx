'use client'

import { ReactNode, useState } from 'react';

import { ProductsFilterParams, ProductsFilterParamsNames, ProductsSortValues } from '../types';
import { ProductsSearchContext } from './ProductsSearchContext';

export const ProductsSearchProvider = ({children}: {children: ReactNode}) => {
    const [filterParams, setFilterParams] = useState<ProductsFilterParams>({});
    const [sortValue, setSortValue] = useState<ProductsSortValues>(ProductsSortValues.DEFAULT);

    const updateFilterParam = (name: ProductsFilterParamsNames, value: number | boolean) => {
        setFilterParams(prevValues => ({
            ...prevValues,
            [name]: value,
        }))
    }

    const updateSortValue = (value: ProductsSortValues) => {
        setSortValue(value);
    }

    return (
        <ProductsSearchContext.Provider value={{
            filterParams,
            sortBy: sortValue,
            setFilterParam: updateFilterParam,
            setSortValue: updateSortValue,
        }}>
            {children}
        </ProductsSearchContext.Provider>
    );
} 