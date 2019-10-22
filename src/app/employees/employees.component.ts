import { Component, OnInit } from '@angular/core';
import { Employee } from '../data/Employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }
  onSubmit() {
    this.router.navigate(['/login']);
  }
  getEmployees() {
    this.employeeService.getEmployees()
    .subscribe(employees => (this.employees = employees));
  }

  add(name: string): void {
    name = name.trim();
    if (!name ) { return; }
    this.employeeService.addEmployee({ name } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee).subscribe();
  }

}
