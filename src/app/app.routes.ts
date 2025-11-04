import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
	{ path: 'products', loadComponent: () => import('./pages/product-list/product-list.page').then(m => m.ProductListPage) },
	{ path: 'product/:id', loadComponent: () => import('./pages/product-detail/product-detail.page').then(m => m.ProductDetailPage) },
	{ path: 'cart', loadComponent: () => import('./pages/cart/cart.page').then(m => m.CartPage) },
	{ path: 'wishlist', loadComponent: () => import('./pages/wishlist/wishlist.page').then(m => m.WishlistPage) },
	{ path: 'checkout', loadComponent: () => import('./pages/checkout/checkout.page').then(m => m.CheckoutPage) },
	{ path: '**', redirectTo: 'products' }
];
