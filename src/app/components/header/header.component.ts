import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterLink],
	template: `
		<header class="header">
			<a routerLink="/" class="brand">GameVerse</a>
			<nav>
				<a routerLink="/products">Products</a>
				<a routerLink="/wishlist">Wishlist ({{ wishlistCount() }})</a>
				<a routerLink="/cart">Cart ({{ cartCount() }})</a>
			</nav>
		</header>
	`,
	styles: [
		`
		.header { display:flex; justify-content:space-between; align-items:center; padding:12px 16px; border-bottom:1px solid var(--border); position: sticky; top: 0; background:var(--surface); z-index: 10; }
		.brand { font-weight:700; font-size:20px; text-decoration:none; color:var(--text); }
		nav a { margin-left:16px; text-decoration:none; color:var(--muted); }
		nav a:hover { text-decoration: underline; }
		`
	]
})
export class HeaderComponent {
	private readonly cart = inject(CartService);
	private readonly wishlist = inject(WishlistService);

	readonly cartCount = computed(() => this.cart.totalQuantity());
	readonly wishlistCount = computed(() => this.wishlist.total());
}

