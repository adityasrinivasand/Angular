import { Injectable } from '@angular/core';
import { Employee } from './data/Employee';
import { of, Observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'api/employees';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        tap(_ => this.log('fetched employees')),
        catchError(this.handleError<Employee[]>('getEmployees', []))
      );
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
    tap(_ => this.log(`fetched employee id=${id}`)),
    catchError(this.handleError<Employee>(`getEmployee id=${id}`))
  );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getEmployeeNo404<Data>(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/?id=${id}`;
    return this.http.get<Employee[]>(url)
      .pipe(
        map(employees => employees[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} employee id=${id}`);
        }),
        catchError(this.handleError<Employee>(`getEmployee id=${id}`))
      );
  }

  /* GET heroes whose name contains search term */
  searchEmployees(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Employee[]>(`${this.employeesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found employees matching "${term}"`)),
      catchError(this.handleError<Employee[]>('searchEmployees', []))
    );
  }

  /** POST: add a new hero to the server */
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptions).pipe(
      tap((newEmployee: Employee) => this.log(`added Employee w/ id=${newEmployee.id}`)),
      catchError(this.handleError<Employee>('addEmployee'))
    );
  }
 /** PUT: update the hero on the server */
 updateEmployee(employee: Employee): Observable<any> {
  return this.http.put(this.employeesUrl, employee, this.httpOptions).pipe(
    tap(_ => this.log(`updated employee id=${employee.id}`)),
    catchError(this.handleError<any>('updateEmployee'))
  );
}

  /** DELETE: delete the hero from the server */
  deleteEmployee(employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Employee id=${id}`)),
      catchError(this.handleError<Employee>('deleteEmployee'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`EmployeeService: ${message}`);
  }



}
