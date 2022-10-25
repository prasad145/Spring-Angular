import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {
    path : 'employees',
    component : EmployeeListComponent
  },
  {
    path : '',
    redirectTo : 'employees',
    pathMatch : 'full'
  },
  {
    path : 'create-employee',
    component : CreateEmployeeComponent
  },
  {
    path : 'edit-employee/:id',
    component : UpdateEmployeeComponent
  },
  {
    path : 'employee/:id',
    component : ViewEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
