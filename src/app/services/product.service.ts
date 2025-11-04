import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../models';

@Injectable({ providedIn: 'root' })
export class ProductService {
	private readonly http = inject(HttpClient);
	private readonly apiBase = '/api';

	getProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(`${this.apiBase}/products`);
	}

	getProductById(id: number): Observable<Product> {
		return this.http.get<Product>(`${this.apiBase}/products/${id}`);
	}
}

