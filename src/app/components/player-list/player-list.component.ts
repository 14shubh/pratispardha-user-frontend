import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  cardSize: number = 18;


  playerList:any;
  constructor(private _userAuth: UserAuthService, private _router: Router,private dataTransfer:DataTransferService) { 
    this._userAuth.playerList().subscribe(data =>{
      this.playerList = data
      },err => {
        console.log(err);
      }) 
  }

  public profile(playerId:string){
    console.log(playerId)
    this._router.navigate(['view-profile/'+playerId]);
    
  }


  onCardDataChange(event: any) {
    this.page = event;
  }




  ngOnInit(): void {
  }

}
