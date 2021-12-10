import Home from './pages/HomePage/HomePage';
import NotFound from './pages/NotFoundPage/NotFoundPage';
import Products from './pages/ProductsPage/ProductsPage';
import ProductDetail from './pages/ProductDetailPage/ProductDetailPage';
import ShoppingCart from './pages/ShoppingCartPage';
import Checkout from './pages/CheckoutPage/CheckoutPage';
export const routes = [
  {
    name: 'Home',
    path: '/',
    element: Home,
  },
  {
    name: 'Not Found',
    path: '*',
    element: NotFound,
  },
  {
    name: 'Home',
    path: '/home',
    element: Home,
  },
  {
    name: 'Products',
    path: '/products',
    element: Products,
  },
  {
    name: 'Product Detail',
    path: '/products/:productId',
    element: ProductDetail,
  },
  {
    name: 'Search',
    path: '/search',
    element: Products,
  },
  {
    name: 'Checkout',
    path: '/checkout',
    element: Checkout,
  },
  {
    name: 'Cart',
    path: '/cart',
    element: ShoppingCart,
  },
];
