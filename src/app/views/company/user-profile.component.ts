import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: []
})
export class UserProfileComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  company: {};

  constructor(private route: ActivatedRoute) {}

  userObj;
  name; email; phone; roles;
  userId: string;

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.route.data.subscribe((data: { user: any }) => {
      this.userObj = data.user;
      this.name = this.userObj.fullName;
      this.email = this.userObj.email;
      this.phone = this.userObj.phoneNumber;
      this.roles = this.userObj.roles;
      });
  }

}
