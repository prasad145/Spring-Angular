import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private emplyeeService : EmployeeService) { }

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
}
