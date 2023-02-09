import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-course-YT';

  public name = 'kaushik';

  public successClass = 'text-success';
  public hasError = true;

  public multipleStyle = {
    fontSize: '20px',
    fontBold: '100px',
    color: 'blue',
  };

  getName() {
    return this.name;
  }

  public greeting = '';

  onButtonClick(event: any) {
    console.log(event);
    this.greeting =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti?';
    console.log('btn click');
  }

  // Template Reference Variables
  logMsg(value: any) {
    console.log(value);
  }

  // two way binding
  public value = '';
}
