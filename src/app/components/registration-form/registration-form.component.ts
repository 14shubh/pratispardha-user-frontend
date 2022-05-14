import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  eventId:string ="";
  userId:string = "";

   constructor(private activateRouter:ActivatedRoute) {
    this.eventId= this.activateRouter.snapshot.params['eventId'];
    this.userId= this.activateRouter.snapshot.params['userId'];  
      console.log(this.eventId);
      console.log(this.userId);
  }

  ngOnInit(): void {
  }

}
