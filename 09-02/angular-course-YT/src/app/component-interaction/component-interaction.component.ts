import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css'],
})
export class ComponentInteractionComponent {
  @Input()
  public parentData: any;

  @Output()
  public childEvent = new EventEmitter();

  onClick() {
    this.childEvent.emit('hey Angular');
  }
}
