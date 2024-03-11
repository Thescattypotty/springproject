package com.example.SpringProject.Service;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.example.SpringProject.DtoEntity.ProductDto;
import com.example.SpringProject.Entity.Product;
import com.example.SpringProject.Exception.ResourceNotFoundException;
import com.example.SpringProject.IService.IProductService;
import com.example.SpringProject.Mapper.ProductMapper;
import com.example.SpringProject.Repository.ProductRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProductService implements IProductService {
    private ProductRepository productRepository;

    @Override
    public ProductDto createProduct(ProductDto productDto) {
        Product product = ProductMapper.mapToProduct(productDto);
        Product SavedProduct = productRepository.save(product);
        return ProductMapper.mapToProductDto(SavedProduct);
    }

    @Override
    public ProductDto getProductById(Long productId) {
        Product ProductFinded = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product Does not exist !"));

        return ProductMapper.mapToProductDto(ProductFinded);
    }

    @Override
    public List<ProductDto> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream()
                .map(
                        (product) -> ProductMapper.mapToProductDto(product))
                .collect(Collectors.toList());
    }

    @Override
    public ProductDto updateProduct(Long productId, ProductDto updatedProductDto) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product Does not exist !"));

        product.setProductName(updatedProductDto.getProductName());
        product.setDescription(updatedProductDto.getDescription());
        product.setStockQuantity(updatedProductDto.getStockQuantity());
        product.setSku(updatedProductDto.getSku());
        product.setPrice(updatedProductDto.getPrice());



        Product updatedProduct = productRepository.save(product);

        return ProductMapper.mapToProductDto(updatedProduct);
    }

    @Override
    public void deleteProduct(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("product Does not exist !"));

        productRepository.deleteById(product.getId());
    }

}
