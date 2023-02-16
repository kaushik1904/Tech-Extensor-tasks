import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private fb: FormBuilder, private route: Router) {}

  public submitted = false;
  get userName() {
    return this.signupForm.controls['userName'];
  }

  get password() {
    return this.signupForm.controls['password'];
  }

  signupForm = this.fb.group(
    {
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [''],
    },
    { validator: PasswordValidator }
  );
  goSignIn() {
    this.submitted = true;
    this.route.navigate(['/signin']);
    console.log(this.signupForm.value);
    localStorage.setItem('users', JSON.stringify(this.signupForm.value));
    alert(`${this.userName.value} your account is created.`);
  }
}
