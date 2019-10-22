import { Component, OnInit } from '@angular/core';
import { Employee } from '../data/Employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterloginComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployees()
    .subscribe(employees => (this.employees = employees));
  }

  onSubmit() {
    this.router.navigate(['/login']);
  }
}
