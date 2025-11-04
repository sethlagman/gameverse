import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../models';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
	standalone: true,
	imports: [CommonModule, RouterLink],
	template: `
		<a routerLink="/products">← Back to products</a>
		<section class="detail" *ngIf="product() as p">
			<img [src]="p.thumbnailUrl" [alt]="p.title" />
			<div>
				<h2>{{ p.title }}</h2>
				<p class="meta">{{ p.platform }} · {{ p.publisher }}</p>
				<p class="price">{{ p.price | currency:'USD':'symbol':'1.2-2' }}</p>
				<p class="desc">{{ p.description }}</p>
				<div class="actions">
					<button (click)="addToCart(p)">Add to cart</button>
					<button (click)="toggleWishlist(p)">{{ isWishlisted(p.id) ? 'Remove ♥' : 'Add ♥' }}</button>
				</div>
			</div>
		</section>
	`,
	styles: [
		`
		.detail { display:grid; grid-template-columns: 320px 1fr; gap:24px; align-items:start; margin:16px 0; }
		.detail img { width:100%; height:auto; border-radius:8px; }
		.meta { color:#777; margin:8px 0; }
		.price { font-weight:700; margin:8px 0; }
		.desc { margin:12px 0; line-height:1.5; }
		.actions { display:flex; gap:8px; }
		button { padding:8px 10px; border:1px solid #ddd; background:#f7f7f7; border-radius:6px; cursor:pointer; }
		button:hover { background:#efefef; }
		`
	]
})
export class ProductDetailPage {
	private readonly route = inject(ActivatedRoute);
	private readonly products = inject(ProductService);
	private readonly cart = inject(CartService);
	private readonly wishlist = inject(WishlistService);

	protected product = signal<Product | null>(null);

	constructor() {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.products.getProductById(id).subscribe(p => this.product.set(p));
	}

	protected addToCart(p: Product) { this.cart.add(p, 1); }
	protected toggleWishlist(p: Product) { this.wishlist.toggle(p); }
	protected isWishlisted(id: number) { return this.wishlist.ids().has(id); }
}

