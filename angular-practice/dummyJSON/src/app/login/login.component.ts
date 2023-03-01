import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {
    sessionStorage.clear();
  }

  get name() {
    return this.loginForm.controls['name'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  loginForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    this.service.login(this.loginForm.value).subscribe(
      (data) => {
        console.log(data);
        sessionStorage.setItem('token', data.token);
        this.router.navigate(['/userlist']);
      },
      (err) => {
        console.log(err.error.message);
      }
    );
  }
}
