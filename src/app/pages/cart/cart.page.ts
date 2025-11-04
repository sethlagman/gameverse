import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
	standalone: true,
	imports: [CommonModule, RouterLink],
	template: `
		<h2>Your Cart</h2>
		<div *ngIf="count() === 0">
			<p>Your cart is empty.</p>
			<a routerLink="/products">Browse games</a>
		</div>
		<table *ngIf="count() > 0" class="table">
			<thead><tr><th>Item</th><th>Price</th><th>Qty</th><th>Total</th><th></th></tr></thead>
			<tbody>
				@for (i of cart.items(); track i.product.id) {
					<tr>
						<td>
							<a [routerLink]="['/product', i.product.id]">{{ i.product.title }}</a>
						</td>
						<td>{{ i.product.price | currency:'USD':'symbol':'1.2-2' }}</td>
						<td>
							<input type="number" min="1" [value]="i.quantity" (change)="onQty(i.product.id, $any($event.target).value)" />
						</td>
						<td>{{ (i.product.price * i.quantity) | currency:'USD':'symbol':'1.2-2' }}</td>
						<td><button (click)="remove(i.product.id)">Remove</button></td>
					</tr>
				}
			</tbody>
		</table>

		<div *ngIf="count() > 0" class="summary">
			<p>Subtotal: {{ subtotal() | currency:'USD':'symbol':'1.2-2' }}</p>
			<a routerLink="/checkout" class="btn">Proceed to checkout</a>
		</div>
	`,
	styles: [
		`
		.table { width:100%; border-collapse: collapse; margin-top:12px; }
		.table th, .table td { border-bottom:1px solid #eee; padding:8px; text-align:left; }
		.summary { display:flex; justify-content:flex-end; gap:16px; align-items:center; margin-top:16px; }
		.btn { padding:10px 12px; border-radius:6px; background:#111; color:#fff; text-decoration:none; }
		input[type=number] { width:64px; }
		button { padding:6px 8px; }
		`
	]
})
export class CartPage {
	readonly cart = inject(CartService);
	readonly count = computed(() => this.cart.totalQuantity());
	readonly subtotal = computed(() => this.cart.subtotal());

	onQty(id: number, value: string) { this.cart.setQuantity(id, Number(value) || 1); }
	remove(id: number) { this.cart.remove(id); }
}

