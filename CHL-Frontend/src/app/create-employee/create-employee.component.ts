import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private empService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addNewEmployee(){
    this.empService.addEmployee(this.employee).subscribe(
      data => {
        console.log(data)
        this.navigateToEmployeeList();
      }, err => {
        console.log("unable to add a employee : " + err)
      }
    )
  }

  navigateToEmployeeList(){
    this.router.navigate(['/employees'])
  }

  onSubmit(){
    console.log(this.employee);
    this.addNewEmployee();
  }
}
