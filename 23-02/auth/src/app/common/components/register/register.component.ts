import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    gender: [''],
    role: [''],
    isActive: [false],
  });

  onSubmit() {
    if (this.registerForm.valid) {
      this.toastr.success('Registered Successfully');
      this.authService
        .addUser(this.registerForm.value)
        .subscribe((res) => console.log(res));
        
    } else {
      this.toastr.warning('Please Enter valid data');
    }
  }
}
