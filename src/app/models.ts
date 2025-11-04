export interface Product {
	id: number;
	title: string;
	platform: string;
	publisher: string;
	price: number;
	discountPercent?: number;
	thumbnailUrl: string;
	images?: string[];
	description?: string;
	genre?: string[];
	releaseDate?: string;
}

export interface CartItem {
	product: Product;
	quantity: number;
}

export interface WishlistItem {
	product: Product;
	addedAt: string;
}

export interface Address {
	fullName: string;
	line1: string;
	line2?: string;
	city: string;
	state: string;
	postalCode: string;
	country: string;
}

export interface OrderItemDTO {
	productId: number;
	quantity: number;
}

export interface OrderRequest {
	items: OrderItemDTO[];
	shippingAddress: Address;
	paymentMethod: 'card' | 'cod';
}

export interface OrderResponse {
	orderId: string;
	total: number;
	createdAt: string;
}

