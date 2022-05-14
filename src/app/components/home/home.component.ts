import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventData:any;
  constructor(private auth:UserAuthService,private _router: Router) {
    this.auth.viewTournaments().subscribe(data=>{
      console.log(data);
      this.eventData=data
    })
   }
 
  public read(eventId:string){
    console.log(eventId);
    this._router.navigate(['event-details/'+eventId]);
  }
  public register(eventId:string){
    this._router.navigate(['registration-form/'+eventId+"/"+localStorage.getItem('UserLoginId')]);
  }
 
  ngOnInit(): void {
  }
 
}
 

