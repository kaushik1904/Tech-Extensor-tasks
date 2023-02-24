import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css'],
})
export class UserlistingComponent {
  data: any;
  isAdmin = false;

  constructor(private service: AuthService, private toastr: ToastrService) {
    this.service.getAllUsers().subscribe((res) => {
      this.data = res;
    });

    if (this.service.getUserRole() == 'admin') {
      this.isAdmin = true;
    }
  }

  deleteUser(id: any) {
    this.toastr.success('Delete User', undefined, { timeOut: 1000 });
    this.service.deleteUser(id).subscribe((res) => console.log(res));
    this.data.splice(id - 1, 1);
  }
}
