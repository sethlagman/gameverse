package com.gameverse.bootstrap;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gameverse.product.Product;
import com.gameverse.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        // Only load data if the database is empty
        if (productRepository.count() == 0) {
            ObjectMapper mapper = new ObjectMapper();
            TypeReference<List<Product>> typeReference = new TypeReference<>() {};

            InputStream inputStream = new ClassPathResource("data/products.json").getInputStream();
            List<Product> products = mapper.readValue(inputStream, typeReference);

            productRepository.saveAll(products);
            System.out.println("Products loaded successfully!");
        } else {
            System.out.println("ℹProducts already exist in the database. Skipping load.");
        }
    }
}
