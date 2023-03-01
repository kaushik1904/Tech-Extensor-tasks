import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private fb: FormBuilder) {}

  get name() {
    return this.registrationForm.controls['name'];
  }
  get email() {
    return this.registrationForm.controls['email'];
  }
  get password() {
    return this.registrationForm.controls['password'];
  }

  registrationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    gender: [''],
    role: ['user'],
    hobby: this.fb.group({
      cricket: [''],
      reading: [''],
      dancing: [''],
    }),
  });
  userData: any;
  isAdmin = false;
  userId: any;

  onSubmit() {}
}
