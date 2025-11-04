import { Injectable, computed, signal } from '@angular/core';
import { CartItem, Product } from '../models';

const STORAGE_KEY = 'gameverse_cart_v1';

@Injectable({ providedIn: 'root' })
export class CartService {
	private readonly itemsSignal = signal<CartItem[]>(this.loadFromStorage());

	readonly items = computed(() => this.itemsSignal());
	readonly totalQuantity = computed(() => this.itemsSignal().reduce((sum, i) => sum + i.quantity, 0));
	readonly subtotal = computed(() => this.itemsSignal().reduce((sum, i) => sum + i.quantity * i.product.price, 0));

	add(product: Product, quantity: number = 1): void {
		const items = [...this.itemsSignal()];
		const idx = items.findIndex(i => i.product.id === product.id);
		if (idx >= 0) {
			items[idx] = { ...items[idx], quantity: items[idx].quantity + quantity };
		} else {
			items.push({ product, quantity });
		}
		this.update(items);
	}

	remove(productId: number): void {
		this.update(this.itemsSignal().filter(i => i.product.id !== productId));
	}

	setQuantity(productId: number, quantity: number): void {
		if (quantity <= 0) return this.remove(productId);
		const items = this.itemsSignal().map(i => i.product.id === productId ? { ...i, quantity } : i);
		this.update(items);
	}

	clear(): void {
		this.update([]);
	}

	private update(items: CartItem[]) {
		this.itemsSignal.set(items);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
	}

	private loadFromStorage(): CartItem[] {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			return raw ? JSON.parse(raw) as CartItem[] : [];
		} catch {
			return [];
		}
	}
}

