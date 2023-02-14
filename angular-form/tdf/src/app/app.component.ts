import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tdf';
  topics = ['Angular js', 'Vue js', 'React js'];
  submitted = false;

  constructor(private _enrollmentService: EnrollmentService) {}

  errorMsg = '';

  userModel = new User(
    'kaushik',
    'kaushik@gmail.com',
    7878787878,
    'Angular',
    'Morning',
    false
  );
  onSubmit() {
    this.submitted = true;
    // console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel).subscribe(
      (data) => console.log('success'),
      (err) => (this.errorMsg = err.statusText)
    );
  }
}
