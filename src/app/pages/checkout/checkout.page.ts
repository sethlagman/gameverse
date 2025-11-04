import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	template: `
		<h2>Checkout</h2>
		<form [formGroup]="form" (ngSubmit)="placeOrder()" class="form">
			<div class="grid">
				<label>Full name<input formControlName="fullName" required /></label>
				<label>Address line 1<input formControlName="line1" required /></label>
				<label>Address line 2<input formControlName="line2" /></label>
				<label>City<input formControlName="city" required /></label>
				<label>State<input formControlName="state" required /></label>
				<label>Postal Code<input formControlName="postalCode" required /></label>
				<label>Country<input formControlName="country" required /></label>
				<label>Payment Method
					<select formControlName="paymentMethod">
						<option value="card">Card</option>
						<option value="cod">Cash on Delivery</option>
					</select>
				</label>
			</div>
			<div class="summary">
				<p>Items: {{ count() }}</p>
				<p>Subtotal: {{ subtotal() | currency:'USD':'symbol':'1.2-2' }}</p>
				<button type="submit" [disabled]="form.invalid || count()===0">Place order</button>
			</div>
		</form>
	`,
	styles: [
		`
		.form { margin-top:12px; }
		.grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap:12px; }
		label { display:flex; flex-direction:column; gap:6px; font-size:12px; color:#555; }
		input, select { padding:8px; border:1px solid #ddd; border-radius:6px; }
		.summary { margin-top:16px; display:flex; gap:16px; align-items:center; }
		button { padding:10px 12px; border-radius:6px; background:#111; color:#fff; border:0; cursor:pointer; }
		button[disabled] { opacity:0.6; cursor:not-allowed; }
		`
	]
})
export class CheckoutPage {
	private readonly fb = inject(FormBuilder);
	private readonly router = inject(Router);
	private readonly cart = inject(CartService);
	private readonly orders = inject(OrderService);

	readonly count = computed(() => this.cart.totalQuantity());
	readonly subtotal = computed(() => this.cart.subtotal());

	readonly form = this.fb.group({
		fullName: ['', Validators.required],
		line1: ['', Validators.required],
		line2: [''],
		city: ['', Validators.required],
		state: ['', Validators.required],
		postalCode: ['', Validators.required],
		country: ['', Validators.required],
		paymentMethod: ['card', Validators.required]
	});

	placeOrder() {
		if (this.form.invalid || this.count() === 0) return;
		const order = {
			items: this.cart.items().map(i => ({ productId: i.product.id, quantity: i.quantity })),
			shippingAddress: this.form.getRawValue(),
			paymentMethod: this.form.getRawValue().paymentMethod
		} as any;
		this.orders.createOrder(order).subscribe(() => {
			this.cart.clear();
			this.router.navigateByUrl('/products');
		});
	}
}

