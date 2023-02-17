import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css'],
})
export class UpdateRestoComponent {
  constructor(private resto: RestoService, private router: ActivatedRoute) {}
  editGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.resto
      .getSelectedResto(this.router.snapshot.params['id'])
      .subscribe((res) => {
        console.log(res);
        this.editGroup = new FormGroup({
          name: new FormControl(res['name']),
          email: new FormControl(res['email']),
          address: new FormControl(res['address']),
        });
      });
  }

  collectDataAndUpdate() {
    console.log(this.editGroup.value);
    this.resto
      .updateData(this.router.snapshot.params['id'], this.editGroup.value)
      .subscribe((res) => console.log(res));
  }
}
