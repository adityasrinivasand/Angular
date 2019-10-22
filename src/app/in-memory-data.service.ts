import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './data/Employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const employees = [
      {id: 1, name: 'Aditya', gender: 'Male', DOB: '09-08-1997', username: 'Aditya', password: 'Psiog@123'},
      {id: 2, name: 'Prassana', gender: 'Male', DOB: '09-08-1997', username: 'Prasy', password: 'Psiog@123'},
      {id: 3, name: 'Agilan', gender: 'Male', DOB: '09-08-1997', username: 'Agilan', password: 'Psiog@123'},
      {id: 4, name: 'Sabarish', gender: 'Male', DOB: '09-08-1997', username: 'Sabarish', password: 'Psiog@123'},
      {id: 5, name: 'Aparna', gender: 'Female', DOB: '09-08-1997', username: 'Aparna', password: 'Psiog@123'},
      {id: 6, name: 'Karthi', gender: 'Male', DOB: '09-08-1997', username: 'Karthi', password: 'Psiog@123'},
      {id: 7, name: 'Adharsh', gender: 'Male', DOB: '09-08-1997', username: 'Adharsh', password: 'Psiog@123'},
      {id: 8, name: 'Shivani', gender: 'Female', DOB: '09-08-1997', username: 'Shivani', password: 'Psiog@123'},
      {id: 9, name: 'Hari Krishnan', gender: 'Male', DOB: '09-08-1997', username: 'Hari', password: 'Psiog@123'},
      {id: 10, name: 'Dhinesh', gender: 'Male', DOB: '09-08-1997', username: 'Dhinesh', password: 'Psiog@123'},
    ];
    return {employees};
  }
  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 11;
  }
}
