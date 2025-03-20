import { Button, IconButton, Stack, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

type Props = {
    isAdded: boolean,
    onAddToCart: () => void,
    quantity?: number,
    onDecrease: () => void,
    onIncrease: () => void,
}

export const AddToCartButton = ({
    isAdded, onAddToCart, quantity, onDecrease, onIncrease,
}: Props) => {
    if (!isAdded) {
        return (
            <Button
                fullWidth
                variant="outlined"
                startIcon={<AddShoppingCartIcon/>}
                onClick={onAddToCart}
                size="medium"
            >
                Add to cart
            </Button>
        );
    }

    return (
        <Stack direction="row" sx={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
          }}>
            <IconButton size="small" aria-label="increase" color="primary" onClick={onDecrease}>
                <RemoveOutlinedIcon />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton size="small" aria-label="decrease" color="primary" onClick={onIncrease}>
                <AddOutlinedIcon />
            </IconButton>
        </Stack>
    );
}
