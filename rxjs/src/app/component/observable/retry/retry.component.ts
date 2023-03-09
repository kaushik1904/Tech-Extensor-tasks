import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay, pipe, retry, retryWhen, scan } from 'rxjs';
import { User } from './User.component';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent {
  constructor(private http: HttpClient) {}
  fetching = false;
  tableData = false;
  status = 'No Data';
  userData: User | undefined;

  fetchDetails() {
    this.fetching = true;
    this.http
      .get<User>('https://dummyjson.com/users/1')
      .pipe(
        // retry(4)
        retryWhen((err) =>
          err.pipe(
            delay(4000),
            scan((retryCount) => {
              if (retryCount >= 5) {
                throw err;
              } else {
                retryCount++;
                console.log('retryErrorCount =>' + retryCount);
                this.status = 'Retrying Attempt #' + retryCount;
                return retryCount;
              }
            }, 0)
          )
        )
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.userData = res;
          this.fetching = false;
          this.tableData = true;
          this.status = 'Data Fetched';
        },
        (err) => {
          console.log(err);
          this.fetching = false;
          this.status = 'Problem Fetching Data';
        }
      );
  }
}
