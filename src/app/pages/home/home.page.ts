import { Component, Signal, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models';
import { ProductService } from '../../services/product.service';

@Component({
	standalone: true,
	imports: [CommonModule, RouterLink],
	template: `
		<section class="hero container">
			<h1>GameVerse</h1>
			<p class="sub">Your minimal store for great games.</p>
			<div class="cta">
				<a routerLink="/products" class="btn">Browse Games</a>
			</div>
		</section>

		<section class="container">
			<h2>Featured</h2>
			<div class="grid">
				@for (p of featured(); track p.id) {
					<a class="card" [routerLink]="['/product', p.id]">
						<img [src]="p.thumbnailUrl" [alt]="p.title" />
						<h3>{{ p.title }}</h3>
						<p class="meta">{{ p.platform }} · {{ p.publisher }}</p>
					</a>
				}
			</div>
		</section>

		<section class="container">
			<h2>New Arrivals</h2>
			<div class="grid">
				@for (p of newest(); track p.id) {
					<a class="card" [routerLink]="['/product', p.id]">
						<img [src]="p.thumbnailUrl" [alt]="p.title" />
						<h3>{{ p.title }}</h3>
						<p class="meta">{{ p.platform }} · {{ p.publisher }}</p>
					</a>
				}
			</div>
		</section>
	`,
	styles: [
		`
		.hero { padding:40px 0; text-align:center; }
		.hero h1 { font-size:40px; margin:0 0 8px; }
		.sub { color: var(--muted); margin:0 0 16px; }
		.cta .btn { padding:10px 14px; border:1px solid var(--border); border-radius:8px; background:#fff; }
		.grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap:16px; }
		.card { border:1px solid var(--border); border-radius:8px; padding:10px; background:#fff; text-decoration:none; color:inherit; display:flex; flex-direction:column; }
		.card img { width:100%; height:140px; object-fit:cover; border-radius:6px; }
		.card h3 { margin:8px 0 4px; font-size:16px; }
		.meta { color: var(--muted); font-size:12px; }
		`
	]
})
export class HomePage {
	private readonly api = inject(ProductService);
	protected products = signal<Product[]>([]);

	constructor() {
		this.api.getProducts().subscribe(p => this.products.set(p));
	}

	protected featured: Signal<Product[]> = computed(() => this.products().slice(0, 6));
	protected newest: Signal<Product[]> = computed(() => {
		return [...this.products()].sort((a, b) => new Date(b.releaseDate || 0).getTime() - new Date(a.releaseDate || 0).getTime()).slice(0, 6);
	});
}


