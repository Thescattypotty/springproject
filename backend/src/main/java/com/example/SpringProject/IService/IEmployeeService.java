package com.example.SpringProject.IService;

import com.example.SpringProject.DtoEntity.EmployeeDto;
import java.util.List;

public interface IEmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long empId , EmployeeDto updatedEmployeeDto);

    void deleteEmployee(Long empId);
}

