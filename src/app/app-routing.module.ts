import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'afterlogin', component: AfterloginComponent},
  { path: 'employee', component: EmployeesComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeesComponent];
