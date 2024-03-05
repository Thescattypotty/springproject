package com.example.SpringProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpringProject.Entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>
{
    
}
