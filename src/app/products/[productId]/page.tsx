'use client'

import Stack from '@mui/material/Stack';
import Link from 'next/link';
import MUILink from '@mui/material/Link';

import { ProductInfo } from '@/modules/products';

export default function Page() {
    return (
        <Stack spacing={2}>
            <Link href="/products" passHref legacyBehavior>
                <MUILink variant="body2">Back to Products List</MUILink>
            </Link>
            <ProductInfo />
        </Stack>
    );
} 