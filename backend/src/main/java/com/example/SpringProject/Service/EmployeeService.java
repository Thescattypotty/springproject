package com.example.SpringProject.Service;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.example.SpringProject.DtoEntity.EmployeeDto;
import com.example.SpringProject.Entity.Employee;
import com.example.SpringProject.Exception.ResourceNotFoundException;
import com.example.SpringProject.IService.IEmployeeService;
import com.example.SpringProject.Mapper.EmployeeMapper;
import com.example.SpringProject.Repository.EmployeeRepository;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class EmployeeService implements IEmployeeService
{
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee SavedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(SavedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
            Employee employeeFinded = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee Does not exist !"));
        
        return EmployeeMapper.mapToEmployeeDto(employeeFinded);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll(); 
        return employees.stream()
            .map(
                (employee) -> EmployeeMapper.mapToEmployeeDto(employee)
                )
            .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long empId, EmployeeDto updatedEmployeeDto) {
        Employee employee = employeeRepository.findById(empId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee Does not exist !"));

        employee.setFirstName(updatedEmployeeDto.getFirstName());
        employee.setLastName(updatedEmployeeDto.getLastName());

        Employee updatedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(updatedEmployee);
    }

    @Override
    public void deleteEmployee(Long empId) {
        Employee employee = employeeRepository.findById(empId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee Does not exist !"));
                
        employeeRepository.deleteById(employee.getId());
    }
    

    
    
}
