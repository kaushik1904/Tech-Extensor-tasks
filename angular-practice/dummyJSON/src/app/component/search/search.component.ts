import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private fb: FormBuilder, private userService: UserService) {}

  searchData: User[] = [];

  @Output()
  public userData = new EventEmitter();

  searchForm = this.fb.group({
    name: [''],
  });

  search() {
    console.log(this.searchForm.value);
    this.userService
      .searchUser(this.searchForm.value.name || '')
      .subscribe((res) => {
        this.searchData = res;
        this.userData.emit(this.searchData);
      });
  }

  clear() {
    this.searchForm.reset();
    this.userData.emit([]);
  }
}
