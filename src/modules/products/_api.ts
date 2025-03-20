import {orderBy} from 'lodash-es';

import PRODUCTS_DATA from './products-stub.json';
import { Product, ProductsFilterParams, ProductsFilterParamsNames, ProductsSortValues } from './types';

const filterProducts = (filterParams: ProductsFilterParams, items: Product[]): Product[] => {
    let newItems = [...items];

    if (filterParams[ProductsFilterParamsNames.IS_NEW]) {
        newItems = PRODUCTS_DATA.filter(item => !!item.isNew)
    }

    if (filterParams[ProductsFilterParamsNames.FROM] || filterParams[ProductsFilterParamsNames.TO]) {
        newItems = newItems.filter(item => {
            if (filterParams[ProductsFilterParamsNames.FROM]
                && filterParams[ProductsFilterParamsNames.TO]
            ) {
                return item.price >= filterParams[ProductsFilterParamsNames.FROM]
                    && item.price <= filterParams[ProductsFilterParamsNames.TO]
            }
    
            if (filterParams[ProductsFilterParamsNames.FROM]) {
                return item.price >= filterParams[ProductsFilterParamsNames.FROM]
            }
    
            if (filterParams[ProductsFilterParamsNames.TO]) {
                return item.price <= filterParams[ProductsFilterParamsNames.TO]
            }
        })
    }

    return newItems;
}

const sortProducts = (value: ProductsSortValues, items: Product[]) => {
    switch (value) {
        case ProductsSortValues.NAME_AZ: {
            return orderBy(items, ['name'], ['asc', 'desc']);
        }
        case ProductsSortValues.NAME_ZA: {
            return orderBy(items, ['name'], ['desc', 'asc']);
        }
        case ProductsSortValues.PRICE_LOW_TO_HIGH: {
            return orderBy(items, ['price'], ['asc', 'desc']);
        }
        case ProductsSortValues.PRICE_HIGH_TO_LOW: {
            return orderBy(items, ['price'], ['desc', 'asc']);
        }
        default: return items;
    }
}

export const fetchProducts = (filterParams: ProductsFilterParams, sortBy: ProductsSortValues): Promise<Product[]> => {
    let data = filterProducts(filterParams, [...PRODUCTS_DATA]);
    data = sortProducts(sortBy, data);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
};

export const fetchProductById = (id: string): Promise<Product> => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = PRODUCTS_DATA.find(el => el.id === id);

            if (product) {
                resolve(product);
            } else {
                reject();
            }
        }, 500)
    })
);
