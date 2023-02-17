import { Component } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css'],
})
export class ListRestoComponent {
  constructor(private resto: RestoService) {}
  public collection: any = [];

  ngOnInit(): void {
    this.resto.getLists().subscribe(
      (res) => (this.collection = res),
      (err) => console.log(err)
    );
  }

  deleteResto(id: any) {
    this.collection.splice(id - 1, 1);
    this.resto.removeResto(id).subscribe((res) => console.log(res));
  }
}
