import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uper-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  UserProfile:any;
  constructor() { 
    this.UserProfile = sessionStorage.getItem('user-profile');
    this.UserProfile = JSON.parse(this.UserProfile)
  }

  ngOnInit(): void {
  }

}
