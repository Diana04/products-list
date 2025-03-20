export type Product = {
    id: string;
    name: string;
    price: number;
    brand: string;
    description: string;
    isNew: boolean;
}

export enum ProductsFilterParamsNames {
    FROM = 'products-filter:price-from',
    TO = 'products-filter:price-to',
    IS_NEW = 'products-filter:is-new'
}

export type ProductsFilterParams = {
    [ProductsFilterParamsNames.FROM]?: number;
    [ProductsFilterParamsNames.TO]?: number;
    [ProductsFilterParamsNames.IS_NEW]?: boolean;
}

export enum ProductsSortValues {
    DEFAULT = 'default',
    NAME_AZ = 'products-sort:name-az',
    NAME_ZA = 'products-sort:name-za',
    PRICE_LOW_TO_HIGH = 'products-sort:price-low-to-high',
    PRICE_HIGH_TO_LOW = 'products-sort:price-high-to-low'
}

export type ProductsSearchContext = {
    filterParams: ProductsFilterParams;
    sortBy: ProductsSortValues;
    setFilterParam: (name: ProductsFilterParamsNames, value: number | boolean) => void;
    setSortValue: (value: ProductsSortValues) => void;
}
