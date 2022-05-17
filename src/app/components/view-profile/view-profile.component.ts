import { ConditionalExpr } from '@angular/compiler';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  @ViewChild("mySelect")eventId :ElementRef|undefined;
  player:any;
  teamId:string='';
  tournaments:any[]=[];

  constructor(private _activeRouter:ActivatedRoute,private _userAuth:UserAuthService ) {
   }

   sendRequest(){
      if(this.eventId?.nativeElement.value!=1){
        this._userAuth.requestPlayer(this._activeRouter.snapshot.params['playerId'],this.teamId,this.eventId?.nativeElement.value).subscribe(data=>{
          alert("request send");
          console.log(data)
        })
      }
      else{
        alert("Please Select Any tournament")
      }
   }

  ngOnInit(): void {
    // alert(sessionStorage.getItem('UserLoginId'));
    console.log(this._activeRouter.snapshot.params['playerId'])
    this._userAuth.viewProfile(this._activeRouter.snapshot.params['playerId']).subscribe(data=>{
     console.log("players data");
     console.log(data.request)
          this.player=data;
    });
    this._userAuth.viewTeamByOwnerId(sessionStorage.getItem('UserLoginId')).subscribe(data=>{
      console.log("AHaaa Data aa gya");
      this.teamId=data[0]._id;
      
      
      for(let event of  data[0].tournaments){
        let flag=true;
        
        for(let request of this.player.request){
          if((event._id==request.tournamentId._id)&&(this.teamId==request.teamId._id)){
            flag=false;
            // window.location.reload();
            
                  }
                }

        if(flag){this.tournaments.push({name:event.tournamentName,_id:event._id});
        console.log(this.tournaments)}
      }
    })
  }

}
