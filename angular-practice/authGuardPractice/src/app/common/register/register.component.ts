import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.service.getUserRole() == 'Admin') {
      this.isAdmin = true;
      this.userId = this.route.snapshot.params['id'];
      this.service.getUser(this.userId).subscribe((res) => {
        this.registrationForm.setValue(
          Object.keys(res).reduce((newRes: any, cur) => {
            if (cur != 'id') {
              newRes[cur] = res[cur];
            }
            return newRes;
          }, {})
        );
      });
    }
  }

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
    role: [''],
    hobby: this.fb.group({
      cricket: [''],
      reading: [''],
      dancing: [''],
    }),
  });
  userData: any;
  isAdmin = false;
  userId: any;

  onSubmit() {
    if (!this.isAdmin) {
      if (this.registrationForm.valid) {
        this.userData = this.registrationForm.value;
        alert('Registertion Successfully');
        this.service.addUser(this.userData).subscribe();
        this.router.navigate(['login']);
      } else {
        alert('Enter Valid Data');
      }
    } else {
      if (this.registrationForm.valid) {
        this.service
          .updateUserData(this.registrationForm.value, this.userId)
          .subscribe();
        alert('Updated data Successfully');
        this.router.navigate(['/user']);
      } else {
        alert('Enter Valid Data');
        this.router.navigate(['/update' + this.userId]);
      }
    }
  }
}
