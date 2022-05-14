import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  player:any;

  constructor(private _activeRouter:ActivatedRoute,private _userAuth:UserAuthService ) {
    console.log(this._activeRouter.snapshot.params['playerId'])
     this._userAuth.viewProfile(this._activeRouter.snapshot.params['playerId']).subscribe(data=>{
       console.log(data);
           this.player=data;
     })}

  ngOnInit(): void {
  }

}
