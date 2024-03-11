package com.example.SpringProject.Mapper;

import com.example.SpringProject.DtoEntity.ProductDto;
import com.example.SpringProject.Entity.Product;

public class ProductMapper {
    public static ProductDto mapToProductDto(Product product)
    {
        return new ProductDto(
            product.getId(),
            product.getProductName(),
            product.getDescription(),
            product.getStockQuantity(),
            product.getSku(),
            product.getPrice()
        );
    }
    
    public static Product mapToProduct(ProductDto productDto) 
    {

        return new Product(
                productDto.getProductName(),
                productDto.getDescription(),
                productDto.getStockQuantity(),
                productDto.getPrice());
    }
}

