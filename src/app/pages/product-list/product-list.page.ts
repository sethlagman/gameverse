import { Component, Signal, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../../models';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink],
	template: `
		<section class="list-header">
			<h2>Games</h2>
			<div class="filters">
				<input class="search" type="search" placeholder="Search games..." [(ngModel)]="query" (keyup.enter)="onSearch()" />
				<select class="select" [(ngModel)]="selectedPlatform">
					<option value="">All Platforms</option>
					@for (pl of platformOptions(); track pl) { <option [value]="pl">{{ pl }}</option> }
				</select>
				<select class="select" [(ngModel)]="selectedGenre">
					<option value="">All Genres</option>
					@for (g of genreOptions(); track g) { <option [value]="g">{{ g }}</option> }
				</select>
				<button class="btn" (click)="onSearch()">Search</button>
			</div>
			<div class="chips">
				@for (g of genreOptions(); track g) {
					<button type="button" class="chip" [class.active]="selectedGenre === g" (click)="setGenre(g)">{{ g }}</button>
				}
			</div>
		</section>

		<section class="grid">
			@for (p of filtered(); track p.id) {
				<article class="card">
					<a [routerLink]="['/product', p.id]">
						<img [src]="p.thumbnailUrl" [alt]="p.title" />
						<h3>{{ p.title }}</h3>
					</a>
					<p class="meta">{{ p.platform }} · {{ p.publisher }}</p>
					<p class="price">{{ p.price | currency:'USD':'symbol':'1.2-2' }}</p>
					<div class="actions">
						<button (click)="addToCart(p)">Add to cart</button>
						<button (click)="toggleWishlist(p)">{{ isWishlisted(p.id) ? '♥' : '♡' }}</button>
					</div>
				</article>
			}
		</section>
	`,
	styles: [
		`
		.list-header { display:flex; justify-content:space-between; align-items:start; gap:12px; margin: 16px 0; flex-wrap:wrap; }
		.filters { display:flex; gap:8px; align-items:center; flex-wrap:wrap; }
		.chips { display:flex; gap:8px; flex-wrap:wrap; }
		.grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap:16px; }
		.card { border:1px solid #eee; border-radius:8px; padding:12px; background:#fff; display:flex; flex-direction:column; }
		.card img { width:100%; height:160px; object-fit:cover; border-radius:6px; }
		.card h3 { margin:8px 0 4px; font-size:16px; }
		.meta { color:#777; font-size:12px; }
		.price { font-weight:700; margin:8px 0; }
		.actions { display:flex; gap:8px; }
		.search { padding:8px 10px; border:1px solid var(--border); border-radius:8px; background:#fff; color:inherit; min-width:220px; }
		.select { padding:8px 10px; border:1px solid var(--border); border-radius:8px; background:#fff; color:inherit; }
		.chip { padding:6px 10px; border:1px solid var(--border); background:#fff; border-radius:999px; cursor:pointer; }
		.chip.active { background:#f3f4f6; }
		button { padding:8px 10px; border:1px solid #ddd; background:#f7f7f7; border-radius:6px; cursor:pointer; }
		button:hover { background:#efefef; }
		`
	]
})
export class ProductListPage {
	private readonly productsApi = inject(ProductService);
	private readonly cart = inject(CartService);
	private readonly wishlist = inject(WishlistService);

	protected products = signal<Product[]>([]);
	protected query = '';
	private readonly searchTerm = signal('');
	protected selectedPlatform = '';
	protected selectedGenre = '';

	protected readonly platformOptions: Signal<string[]> = computed(() => {
		const set = new Set<string>();
		for (const p of this.products()) if (p.platform) set.add(p.platform);
		return Array.from(set).sort();
	});

	protected readonly genreOptions: Signal<string[]> = computed(() => {
		const set = new Set<string>();
		for (const p of this.products()) {
			const g: any = (p as any).genre;
			if (!g) continue;
			if (Array.isArray(g)) g.forEach((x: string) => set.add(x));
			else String(g).split(',').map(s => s.trim()).filter(Boolean).forEach(x => set.add(x));
		}
		return Array.from(set).sort();
	});

	constructor() {
		this.productsApi.getProducts().subscribe(p => this.products.set(p));
	}

	protected filtered: Signal<Product[]> = computed(() => {
		const q = this.searchTerm().toLowerCase();
		const platform = this.selectedPlatform.trim().toLowerCase();
		const genre = this.selectedGenre.trim().toLowerCase();
		return this.products().filter(p => {
			const blob = `${p.title} ${p.platform} ${p.publisher}`.toLowerCase();
			if (q && !blob.includes(q)) return false;
			if (platform && (p.platform || '').trim().toLowerCase() !== platform) return false;
			if (genre) {
				const g: any = (p as any).genre;
				const list = Array.isArray(g) ? g : String(g || '').split(',').map((s: string) => s.trim());
				if (!list.some((x: string) => (x || '').trim().toLowerCase() === genre)) return false;
			}
			return true;
		});
	});

	protected onSearch() { this.searchTerm.set(this.query.trim()); }
	protected setGenre(g: string) { this.selectedGenre = this.selectedGenre === g ? '' : g; }

	protected addToCart(p: Product) { this.cart.add(p, 1); }
	protected toggleWishlist(p: Product) { this.wishlist.toggle(p); }
	protected isWishlisted(id: number) { return this.wishlist.ids().has(id); }
}

