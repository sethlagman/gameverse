# GameVerse – E‑commerce for Video Games

GameVerse is a full‑stack e‑commerce application:
- Angular frontend (standalone components, cart, wishlist, checkout)
- Spring Boot backend (H2 in‑memory DB with seed data)
- Optional Docker setup for local orchestration

## Prerequisites
- Node 18+ and npm
- Java 17+
- Maven 3.9+

## Run locally (without Docker)
1) Start the backend:
```bash
cd backend
mvn spring-boot:run
```
Backend runs at `http://localhost:8080` with endpoints:
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/orders`

2) Start the frontend (with API proxy):
```bash
cd ..
npm install
ng serve
```
Frontend runs at `http://localhost:4200`. The dev server proxies `/api` to `http://localhost:8080`.

## Build production
```bash
ng build
```

## Docker (optional)
Build and run both services:
```bash
docker compose up --build
```
- Frontend: `http://localhost:4200`
- Backend: `http://localhost:8080`

## Project structure
- `src/app/pages` – Product list/detail, Cart, Wishlist, Checkout
- `src/app/services` – Product, Cart, Wishlist, Order services
- `backend` – Spring Boot app with Products and Orders