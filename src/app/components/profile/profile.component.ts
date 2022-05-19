import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  UserProfile: any;
  isDisabled: boolean = true;

  constructor() {
    this.UserProfile = sessionStorage.getItem('user-profile')
    this.UserProfile = JSON.parse(this.UserProfile);
    console.log(this.UserProfile);
   }
   public status(isDisabled:any){
    if(isDisabled){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
   }

  ngOnInit(): void {
  }

}
