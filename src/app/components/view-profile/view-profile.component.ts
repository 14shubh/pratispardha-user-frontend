import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
player:any;
  constructor(private dataTransfer:DataTransferService) { 
   this.player=this.dataTransfer.getData();
  }

  ngOnInit(): void {
  }

}
