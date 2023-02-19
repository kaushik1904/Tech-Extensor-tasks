import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) {}

  userForm = this.fb.group({
    name: ['', Validators.required],
    age: [''],
  });

  getData() {
    console.log(this.userForm.value);
  }
}
