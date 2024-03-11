package com.example.SpringProject.Entity;

import java.util.UUID;
import java.time.Year;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "productName")
    private String ProductName;

    @Column(name = "Description")
    private String Description;

    @Column(name = "StockQuantity")
    private int StockQuantity;

    @Column(name = "sku")
    private String sku;

    @Column(name = "price")
    private float price;

    public Product(String productName, String description, int stockQuantity, float price) {
        this.ProductName = productName;
        this.Description = description;
        this.StockQuantity = stockQuantity;
        this.price = price;

    }

    private String generateSku() {
        String year = String.valueOf(Year.now().getValue());
        UUID uuid = UUID.randomUUID();
        String uuidNumber = uuid.toString().replaceAll("-", "");
        return "prod" + year + uuidNumber;
    }

    @PrePersist
    private void onCreate() {
        this.sku = generateSku();
    }
}
