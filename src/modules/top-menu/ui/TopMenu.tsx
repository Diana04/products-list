'use client'

import { useContext } from 'react';
import { Box, Stack, Typography, IconButton, Divider, badgeClasses, styled, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { CartContext } from '@/modules/cart';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export const TopMenu = () => {
    const {totalQuantity, totalPrice} = useContext(CartContext);

    return (
        <Box sx={{ my: 4 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography>Title</Typography>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Typography fontWeight="bold">
                        Total Price: ${totalPrice || 0}
                    </Typography>
                    <IconButton size="medium">
                        <ShoppingCartIcon fontSize="inherit" />
                        <CartBadge badgeContent={totalQuantity} color="primary" overlap="circular" />
                    </IconButton>
                </Stack>
            </Stack>
            <Divider />
        </Box>
    );
}