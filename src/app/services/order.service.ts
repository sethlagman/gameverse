import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderRequest, OrderResponse } from '../models';

@Injectable({ providedIn: 'root' })
export class OrderService {
	private readonly http = inject(HttpClient);
	private readonly apiBase = '/api';

	createOrder(order: OrderRequest): Observable<OrderResponse> {
		return this.http.post<OrderResponse>(`${this.apiBase}/orders`, order);
	}
}

