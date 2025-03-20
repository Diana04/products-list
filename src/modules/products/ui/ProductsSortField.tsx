'use client'

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { ProductsSortValues } from '../types';

const PRODUCTS_SORT_DROPDOWN_ITEMS = [
    {
        value: ProductsSortValues.NAME_AZ,
        label: 'Product Name: A-Z'
    },
    {
        value: ProductsSortValues.NAME_ZA,
        label: 'Product Name: Z-A'
    },
    {
        value: ProductsSortValues.PRICE_LOW_TO_HIGH,
        label: 'Price: Low to High'
    },
    {
        value: ProductsSortValues.PRICE_HIGH_TO_LOW,
        label: 'Price: High to Low'
    }
];

type Props = {
    onChange: (value: ProductsSortValues) => void;
}

export const ProductsSortField = ({ onChange }: Props) => (
    <TextField
        label="Sort By"
        defaultValue=""
        select
        variant="outlined"
        size="small"
        sx={{width: '220px'}}
        onChange={e => onChange(e.target.value as ProductsSortValues)}
    >
        {PRODUCTS_SORT_DROPDOWN_ITEMS.map(item => (
            <MenuItem value={item.value} key={item.value}>
                {item.label}
            </MenuItem>
        ))}
    </TextField>
);
