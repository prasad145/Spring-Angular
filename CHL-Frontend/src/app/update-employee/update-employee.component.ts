import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  id !: number;
  employee: Employee = new Employee();
  constructor(private empService : EmployeeService,
              private activedRoute : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.id = this.activedRoute.snapshot.params['id'];
    this.empService.getEmployeeById(this.id).subscribe(
      data => {
        this.employee = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  editEmployee(){
    this.empService.updateEmployee(this.employee, this.id).subscribe(
      data => {
        console.log(data)
        this.navigateToEmployeeList();
      }, err => {
        console.log("unable to update a employee details: " + err)
      }
    )
  }

  navigateToEmployeeList(){
    this.router.navigate(['/employees'])
  }

  onSubmit(){
    console.log(this.employee);
    this.editEmployee();
  }
}
