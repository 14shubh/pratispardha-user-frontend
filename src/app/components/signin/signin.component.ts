import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { User } from '../../model/user'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private _userAuth: UserAuthService, private _router: Router) { }

  public sign_up_page(){
    this._router.navigate(['/sign-up']);
  }

  user:User = new User('','','','','');

  public SignIn(){
    console.log(this.user)
    // this._userAuth.login(this.user).subscribe((data)=>{
    //   console.log(data);
    // },(err)=>{
    //   console.log(err);
    // })
  }
  ngOnInit(): void {
  }

}
