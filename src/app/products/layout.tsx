import Container from '@mui/material/Container';

import { CartProvider } from '@/modules/cart';
import { ProductsSearchProvider } from '@/modules/products';
import { TopMenu } from '@/modules/top-menu';

export default function RootLayout({ children }: {children: React.ReactNode }) {
    return (
        <CartProvider>
            <Container maxWidth='lg'>
                <TopMenu />
                <ProductsSearchProvider>
                    {children}
                </ProductsSearchProvider>
            </Container>
        </CartProvider>
    );
  }