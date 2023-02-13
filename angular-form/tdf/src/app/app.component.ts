import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tdf';
  topics = ['Angular js', 'Vue js', 'React js'];

  userModel = new User(
    'kaushik',
    'kaushik@gmail.com',
    7878787878,
    'Angular',
    'Morning',
    false
  );
}
