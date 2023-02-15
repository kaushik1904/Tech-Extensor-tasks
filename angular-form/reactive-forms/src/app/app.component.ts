import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive-forms';

  registrationForm = new FormGroup({
    userName: new FormControl('kaushik'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl(''),
    }),
  });

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
