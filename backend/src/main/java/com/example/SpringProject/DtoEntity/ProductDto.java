package com.example.SpringProject.DtoEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto{
    
    private Long id;

    private String ProductName;

    private String Description;

    private int StockQuantity;

    private String sku;

    private float price;

}
