import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css'],
})
export class AddRestoComponent {
  constructor(private resto: RestoService) {}
  restoGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  collectResto() {
    console.log(this.restoGroup.value);
    this.resto.saveResto(this.restoGroup.value).subscribe();
    this.successMsg = true;
    this.restoGroup.reset({});
  }

  successMsg = false;
  closeAlert() {
    this.successMsg = false;
  }
}
