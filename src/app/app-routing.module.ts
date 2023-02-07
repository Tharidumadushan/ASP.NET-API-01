import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'employee', component:EmployeeComponent},
  {path:'department', component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
