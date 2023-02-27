import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private router: Router
  ) {
    sessionStorage.clear();
  }

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  userId: any;
  userData: any;
  isAdmin: any;

  onSubmit() {
    if (this.loginForm.valid) {
      this.userData = this.loginForm.value;
      this.service.getAllUsers().subscribe((res) => {
        const user = res.find((a: any) => {
          return (
            a.email == this.loginForm.value.email &&
            a.password == this.loginForm.value.password
          );
        });

        if (user) {
          alert('Login Successfully');
          sessionStorage.setItem('id', user.id);
          sessionStorage.setItem('role', user.role);
          this.router.navigate(['/home']);
        } else {
          alert('User Not Found');
          this.router.navigate(['/login']);
        }
      });
    }
  }
}
