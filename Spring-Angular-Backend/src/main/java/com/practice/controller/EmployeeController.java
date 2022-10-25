package com.practice.controller;

import com.practice.exception.ResourceNotFoundException;
import com.practice.model.Employee;
import com.practice.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepo employeeRepo;

    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee){
        return employeeRepo.save(employee);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = employeeRepo.findById(id).
                orElseThrow(() -> new ResourceNotFoundException(String.format("Employee with id %s Not Found", id)));
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> editEmployee(@PathVariable Long id, @RequestBody Employee emp){
        Employee employee = employeeRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("Employee with id %s Not Found", id)));
        employee.setFirstName(emp.getFirstName());
        employee.setLastName(emp.getLastName());
        employee.setEmail(emp.getEmail());
        Employee updatedEmp = employeeRepo.save(employee);
        return ResponseEntity.ok(updatedEmp);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable Long id){
        Employee employee = employeeRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("Employee with id %s Not Found", id)));
        employeeRepo.deleteById(id);
        return ResponseEntity.ok(employee);
    }
}
