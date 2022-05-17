import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private _authenticate:AuthenticateService,private _router:Router) { }
  public isLoggedIn(): boolean {
    return this._authenticate.checkToken();
   }
 
   public signout(){
     sessionStorage.removeItem('jwt_token');
     this._router.navigate(['sign-in']);
   }
 
   public notify(notification:any){
    notification.classList.toggle('active');
   }
  ngOnInit(): void {
  }
 
}
 

