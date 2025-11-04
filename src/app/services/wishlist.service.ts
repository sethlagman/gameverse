import { Injectable, computed, signal } from '@angular/core';
import { Product, WishlistItem } from '../models';

const STORAGE_KEY = 'gameverse_wishlist_v1';

@Injectable({ providedIn: 'root' })
export class WishlistService {
	private readonly itemsSignal = signal<WishlistItem[]>(this.loadFromStorage());

	readonly items = computed(() => this.itemsSignal());
	readonly total = computed(() => this.itemsSignal().length);
	readonly ids = computed(() => new Set(this.itemsSignal().map(i => i.product.id)));

	toggle(product: Product): void {
		const exists = this.ids().has(product.id);
		if (exists) {
			this.remove(product.id);
		} else {
			this.add(product);
		}
	}

	add(product: Product): void {
		const items = [...this.itemsSignal(), { product, addedAt: new Date().toISOString() }];
		this.update(items);
	}

	remove(productId: number): void {
		this.update(this.itemsSignal().filter(i => i.product.id !== productId));
	}

	clear(): void {
		this.update([]);
	}

	private update(items: WishlistItem[]) {
		this.itemsSignal.set(items);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
	}

	private loadFromStorage(): WishlistItem[] {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			return raw ? JSON.parse(raw) as WishlistItem[] : [];
		} catch {
			return [];
		}
	}
}

