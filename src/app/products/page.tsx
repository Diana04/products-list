'use client'

import { useContext } from 'react';
import Grid2 from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ProductsSearchContext, ProductsList, ProductsFilterForm, ProductsSortField } from '@/modules/products';

export default function ProductsPage() {
    const {setSortValue, setFilterParam } = useContext(ProductsSearchContext);

    return (
        <>
            <Typography variant="h4" component="h1" sx={{ mb: 4 }} fontWeight="bold">
                Products List
            </Typography>
            <Grid2 container spacing={8}>
                <Grid2 size={3}>
                    <ProductsFilterForm onChange={setFilterParam} />
                </Grid2>
                <Grid2 size={9}>
                    <Stack spacing={2}>
                        <ProductsSortField onChange={setSortValue} />
                        <ProductsList />
                    </Stack>
                </Grid2>
            </Grid2>
        </>
    );
}
