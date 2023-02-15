import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive-forms';

  constructor(private fb: FormBuilder) {}

  get userName() {
    return this.registrationForm.controls.userName;
  }

  registrationForm = this.fb.group({
    userName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        forbiddenNameValidator(/password/),
      ],
    ],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: [''],
    }),
  });

  // registrationForm = new FormGroup({
  //   userName: new FormControl('kaushik'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   }),
  // });

  loadApiData() {
    this.registrationForm.patchValue({
      // setValue
      userName: 'Kaushik',
      password: '123',
      confirmPassword: '123',
      // address: {
      //   city: 'palanpur',
      //   state: 'gujarat',
      //   postalCode: '385001',
      // },
    });
  }
}
