import { Component, OnInit } from '@angular/core';
import { Employee } from '../data/Employee';
import { EMPLOYEES } from '../data/mock-employees';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployees()
    .subscribe(employees => (this.employees = employees));
  }
  onSelect(employee: Employee) {
    this.selectedEmployee = employee;
    console.log(this.selectedEmployee);
  }

}
