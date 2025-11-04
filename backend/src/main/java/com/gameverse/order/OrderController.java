package com.gameverse.order;

import com.gameverse.product.ProductRepository;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@Validated
public class OrderController {
    private final OrderRepository orders;
    private final ProductRepository products;

    public OrderController(OrderRepository orders, ProductRepository products) {
        this.orders = orders;
        this.products = products;
    }

    @PostMapping
    public ResponseEntity<CreateOrderResponse> create(@RequestBody CreateOrderRequest req) {
        Order order = new Order();
        order.setShippingAddress(req.getShippingAddress());

        double total = 0.0;
        for (OrderItemDTO itemDto : req.getItems()) {
            var product = products.findById(itemDto.getProductId()).orElseThrow();
            var item = new OrderItem();
            item.setOrder(order);
            item.setProduct(product);
            item.setQuantity(itemDto.getQuantity());
            order.getItems().add(item);
            total += product.getPrice() * itemDto.getQuantity();
        }
        order.setTotal(total);
        orders.save(order);
        return ResponseEntity.ok(new CreateOrderResponse(order.getId(), order.getTotal()));
    }

    public static class CreateOrderRequest {
        @NotNull
        private List<OrderItemDTO> items;
        @NotNull
        private Address shippingAddress;

        public List<OrderItemDTO> getItems() { return items; }
        public void setItems(List<OrderItemDTO> items) { this.items = items; }
        public Address getShippingAddress() { return shippingAddress; }
        public void setShippingAddress(Address shippingAddress) { this.shippingAddress = shippingAddress; }
    }

    public static class OrderItemDTO {
        @NotNull
        private Long productId;
        @Min(1)
        private Integer quantity;

        public Long getProductId() { return productId; }
        public void setProductId(Long productId) { this.productId = productId; }
        public Integer getQuantity() { return quantity; }
        public void setQuantity(Integer quantity) { this.quantity = quantity; }
    }

    public record CreateOrderResponse(Long orderId, Double total) {}
}


