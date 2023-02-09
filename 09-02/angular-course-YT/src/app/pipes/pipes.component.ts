import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  public name = 'kaushik';
  public text = 'Lorem ipsum dolor sit amet.';

  public person = {
    firstName: 'kaushik',
    lastName: 'prajapati',
  };

  public date = new Date();
}
