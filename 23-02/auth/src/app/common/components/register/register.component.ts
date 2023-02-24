import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private service: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.service.getUserRole() == 'admin') {
      this.isAdmin = true;
      this.id = this.route.snapshot.params['id'];
      this.service.getUser(this.id).subscribe((res) =>
        this.registerForm.setValue(
          // Method 1
          // {
          //   name: res.name,
          //   email: res.email,
          //   password: res.password,
          //   gender: res.gender,
          //   role: res.role,
          //   isActive: res.isActive,
          // }
          // Method 2
          Object.keys(res).reduce((newRes: any, crr) => {
            if (crr != 'id') {
              newRes[crr] = res[crr];
            }
            return newRes;
          }, {})
        )
      );
    }
  }
  isAdmin = false;
  id: any;

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    gender: [''],
    role: ['user'],
    isActive: ['inactive'],
  });

  onSubmit() {
    if (!this.isAdmin) {
      if (this.registerForm.valid) {
        this.toastr.success('Registered Successfully');
        this.service.addUser(this.registerForm.value).subscribe();
        this.router.navigate(['login']);
      } else {
        this.toastr.warning('Please Enter valid data');
      }
    } else {
      if (this.registerForm.valid) {
        this.toastr.success('Updated Successfully');
        this.service
          .updateUserData(this.id, this.registerForm.value)
          .subscribe();
        this.router.navigate(['user']);
        console.log(this.registerForm.value.role);
        // sessionStorage.setItem('userRole', this.registerForm.value.role || '');
      } else {
        this.toastr.warning('Please Enter valid data');
      }
    }
  }
}
