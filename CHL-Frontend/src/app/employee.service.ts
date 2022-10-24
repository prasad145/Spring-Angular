import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8081/employees";
  constructor(private httpClient : HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    console.log("get employee list method invoked")
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  addEmployee(employee: Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.baseURL}`, employee);
  }
}
