package com.example.SpringProject.IService;

import com.example.SpringProject.DtoEntity.ProductDto;
import java.util.List;

public interface IProductService {
    ProductDto createProduct(ProductDto productDto);

    ProductDto getProductById(Long productId);

    List<ProductDto> getAllProducts();

    ProductDto updateProduct(Long productId, ProductDto updatedProductDto);

    void deleteProduct(Long productId);
}
