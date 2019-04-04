import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
/** user component*/
export class UserComponent implements OnInit {
  users: any;
  /** user ctor */
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://localhost:23450/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error)
    });
  }
}
