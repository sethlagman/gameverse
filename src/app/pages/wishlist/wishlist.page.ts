import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';

@Component({
	standalone: true,
	imports: [CommonModule, RouterLink],
	template: `
		<h2>Wishlist</h2>
		<div *ngIf="wishlist.items().length === 0">
			<p>No items in wishlist.</p>
			<a routerLink="/products">Browse games</a>
		</div>
		<ul class="wl" *ngIf="wishlist.items().length > 0">
			@for (i of wishlist.items(); track i.product.id) {
				<li>
					<a [routerLink]="['/product', i.product.id]">{{ i.product.title }}</a>
					<div class="actions">
						<button (click)="cart.add(i.product, 1)">Add to cart</button>
						<button (click)="wishlist.remove(i.product.id)">Remove</button>
					</div>
				</li>
			}
		</ul>
	`,
	styles: [
		`
		.wl { list-style:none; padding:0; margin:12px 0; }
		.wl li { display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding:10px 0; }
		.actions { display:flex; gap:8px; }
		`
	]
})
export class WishlistPage {
	readonly wishlist = inject(WishlistService);
	readonly cart = inject(CartService);
}

