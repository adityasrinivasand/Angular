import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../data/Employee';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employee: Employee;

  constructor(private route: ActivatedRoute,
              private employeeService: EmployeeService,
              private location: Location) { }

  ngOnInit(): void {
    this.getEmployee();
  }


  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id).subscribe(employee => this.employee = employee);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.employeeService.updateEmployee(this.employee)
      .subscribe(() => this.goBack());
  }

}
