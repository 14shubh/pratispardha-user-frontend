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
  teamId:string='';
  tournaments:any[]=[];

  constructor(private _activeRouter:ActivatedRoute,private _userAuth:UserAuthService ) {
   }

  ngOnInit(): void {
    alert(sessionStorage.getItem('UserLoginId'));
    console.log(this._activeRouter.snapshot.params['playerId'])
    this._userAuth.viewProfile(this._activeRouter.snapshot.params['playerId']).subscribe(data=>{
          this.player=data;
    });
    this._userAuth.viewTeamByOwnerId(sessionStorage.getItem('UserLoginId')).subscribe(data=>{
      console.log("AHaaa Data aa gya");
      this.teamId=data[0]._id;
      for(let event of  data[0].tournaments){
        this.tournaments.push({name:event.tournamentName,_id:event._id});
        console.log(this.tournaments)
      }
    })
  }

}
