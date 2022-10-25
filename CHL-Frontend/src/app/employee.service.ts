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

  getEmployeeById(id : number) : Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(employee: Employee, id : number): Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id : number) : Observable<Employee>{
    return this.httpClient.delete<Employee>(`${this.baseURL}/${id}`);
  }
}
