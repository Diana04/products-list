'use client'

import { Box, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import { ProductsFilterParamsNames } from '../types';

type Props = {
    onChange: (paramName: ProductsFilterParamsNames, value: number | boolean) => void;
}

export const ProductsFilterForm = ({ onChange }: Props) => {

    const handleFilterChange = (paramName: ProductsFilterParamsNames, value: string | boolean) => {
        switch (paramName) {
            case ProductsFilterParamsNames.FROM:
            case ProductsFilterParamsNames.TO: {
                onChange(paramName, Number(value));
                break;
            }
            case ProductsFilterParamsNames.IS_NEW: {
                onChange(paramName, Boolean(value));
                break;
            }
            default: {}
        }
    }

    return (
        <Stack>
            <Typography fontWeight="bold">Price</Typography>
            <Box component="form">
                <Stack spacing={4}>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            label="From"
                            onBlur={(e) => handleFilterChange(ProductsFilterParamsNames.FROM, e.target.value)}
                            variant="standard"
                            type="number"
                            size="small"
                        />
                        <TextField
                            label="To"
                            onBlur={(e) => handleFilterChange(ProductsFilterParamsNames.TO, e.target.value)}
                            variant="standard"
                            type="number"
                            size="small"
                        />
                    </Stack>

                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography fontWeight="bold">New</Typography>
                        <Switch
                            onChange={(e) => handleFilterChange(ProductsFilterParamsNames.IS_NEW, e.target.checked)}
                        />
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
}
