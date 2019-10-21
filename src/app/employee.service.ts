import { Injectable } from '@angular/core';
import { Employee } from './data/Employee';
import { EMPLOYEES } from './data/mock-employees';
import { of, Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private messageService: MessageService) { }

  getEmployees(): Observable<Employee[]> {
    this.messageService.add('EmployeeService: Fetched Employees');
    return of(EMPLOYEES);
  }
}
