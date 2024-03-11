
package com.example.SpringProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpringProject.Entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
