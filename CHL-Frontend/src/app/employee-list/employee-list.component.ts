import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private emplyeeService : EmployeeService,
              private router : Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(){
    console.log("method invoked");
    return this.emplyeeService.getEmployeeList().subscribe(data => {
      console.log("data incoming" + data);
      this.employees = data;
    })
  }

  updateEmployee(id: number){
    this.router.navigate(['edit-employee', id]);
  }

  deleteEmployee(id: number){
    return this.emplyeeService.deleteEmployee(id).subscribe(data => {
      console.log("deleted employee successfully" + data);
      this.getEmployees();
    })
  }

  onEmployeeClick(id: number){
    this.router.navigate(['employee', id]);
  }
}
