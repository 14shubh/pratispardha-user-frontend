import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  UserProfile: any;

  constructor() {
    this.UserProfile = sessionStorage.getItem('user-profile')
    this.UserProfile = JSON.parse(this.UserProfile);
    console.log(this.UserProfile);
   }

  ngOnInit(): void {
  }

}
