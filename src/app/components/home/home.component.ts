import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UserAuthService } from 'src/app/services/user-auth.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  upcomming_event:any[]=[];
  live_event:any[]=[];
  end_event:any[]=[];
  eventData:any;
  date: any;
  nowDate: any;
  toggle = false;
  constructor(private activateRouter:ActivatedRoute,private auth:UserAuthService,private _router: Router, public _date_pipe:DatePipe ) {
    // this._router.routeReuseStrategy.shouldReuseRoute = () => false;
        
      // this._router.events.subscribe(event=>{
      //   if(event instanceof NavigationEnd){
      //     let status = this.activateRouter.snapshot.paramMap.get('status');
      //     console.log("Change detected....")
      //     if(status == 'true'){
      //       this._router.navigate(['home',false]);
      //       //window.location.reload();
      //       this.ngOnInit();
      //     } 
      //   }
      // })
   }
   
  public AllEvents(){
    this._router.navigate(['event'])
  }
  public read(eventId:string){
    console.log(eventId);
    this._router.navigate(['event-details/'+eventId]);
  }
  public register(eventId:string){
    this._router.navigate(['registration-form/'+eventId+"/"+sessionStorage.getItem('UserLoginId')]);
  }


 
  ngOnInit(): void {
      this.auth.viewTournaments().subscribe(data=>{
      this.eventData=data

      for (let i = 0; i < this.eventData.length; i++) {
        if(this.eventData[i].tournamentStartDate < Date.now()){
          this.end_event.push(this.eventData[i]);
          
        }
        else if(this.eventData[i].tournamentStartDate > Date.now()){
          this.upcomming_event.push(this.eventData[i]);
          this.date = this.eventData[i].tournamentStartDate;
          this.nowDate = Date.now();
          console.log(this._date_pipe.transform(this.nowDate,'dd-MM-yyyy'))
          console.log(this._date_pipe.transform(this.date,'dd-MM-yyyy'));
        }else{
          this.live_event.push(this.live_event[i]);
        }
        
      }
      console.log('End event ',this.end_event)
      console.log('Upcomming event ',this.upcomming_event)
      console.log('Live event ',this.live_event)
       
    })
   }
  
 
}
 

