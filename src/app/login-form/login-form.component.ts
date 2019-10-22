import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../data/Employee';
import { Router } from '@angular/router';
import { EmployeeLogin } from '../data/Login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(private router: Router) { }
  employeeLogin: EmployeeLogin = {
    userName: '',
    password: ''
  };
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if ((this.employeeLogin.userName === 'Admin') && (this.employeeLogin.password === 'Pass')) {
      console.log('Admin vantan dawwww');
      this.router.navigate(['/employee']);
    } else if ((this.employeeLogin.userName === 'User') && (this.employeeLogin.password === 'User')) {
      console.log('Employee vantan dawwww');
      this.router.navigate(['/afterlogin']);
    }
  }
}
