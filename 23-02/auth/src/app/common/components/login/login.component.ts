import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    sessionStorage.clear();
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.service.getAllUsers().subscribe((res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });

        if (user) {
          if (user.isActive == 'active') {
            this.toastr.success('Login Successfully');
            sessionStorage.setItem('id', user.id);
            sessionStorage.setItem('userRole', user.role);
            this.router.navigate(['']);
          } else {
            this.toastr.error('Please Contact Admin', 'In Active User');
          }
        } else {
          this.toastr.error('Invalid Data');
        }
      });
    } else {
      this.toastr.warning('Please Enter valid data');
    }
  }
}
