package com.example.SpringProject.Mapper;

import com.example.SpringProject.DtoEntity.EmployeeDto;
import com.example.SpringProject.Entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employee employee)
    {
        return new EmployeeDto
        (
            employee.getId(),
            employee.getFirstName(),
            employee.getLastName()
        );
    }
    
    public static Employee mapToEmployee(EmployeeDto employeeDto)
    {
        return new Employee(
            employeeDto.getId(),
            employeeDto.getFirstName(),
            employeeDto.getLastName()
        );
    }
    
}
