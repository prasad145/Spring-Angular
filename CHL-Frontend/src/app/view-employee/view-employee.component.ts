import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  id !: number;
  employee !: Employee;
  constructor(private empService : EmployeeService,
              private activedRoute : ActivatedRoute) { }

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


}
