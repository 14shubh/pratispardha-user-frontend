import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
declare var Razorpay:any
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  eventId:string =""; userId:string = "";eventData:any;teamData:any;teamName:string="";flag:boolean=false;
  teamId:string='';tournamentIds:string[]=[];tournamentDates:string[]=[];
 name:string='';email:string='';mobile:string='';
   constructor(private ngZone:NgZone ,private activateRouter:ActivatedRoute,private userAuth:UserAuthService,private router:Router) {
  }
   public   async ragisterForTournament(){
     console.log(this.userId)
     console.log(this.eventId)
     console.log(this.teamId)
    if((this.tournamentIds.indexOf(this.eventId))==(-1)){
        if((this.tournamentDates.indexOf(this.eventData.tournamentStartDate.toString()))==(-1)){
          if((this.eventData.tournamentApplyDate)<=(new Date().getTime())){
            if((this.eventData.tournamentEndDate)>=(new Date().getTime())){
              console.log(sessionStorage.getItem('UserLoginId'));
              if(!this.flag){
                        await  this.userAuth.createTeam(this.teamName,this.userId).subscribe(data=>{
                          alert("created")
                          console.log(data)
                          this.teamId=data._id;
                          this.flag=true;
                 
                        this.userAuth.applyForTournament(this.teamId,this.eventId).subscribe(data=>{
                          alert("success");
                          //this.router.navigate(['home',true]);
                          window.location.href ="http://localhost:4200/home";
                         });
                })
                        }else{
                        this.userAuth.applyForTournament(this.teamId,this.eventId).subscribe(data=>{
                          alert("success....");
                          //this.router.navigate(['home',true]);
                          window.location.href ="http://localhost:4200/home";
                        })
                      }
//     this.userAuth.createOrder(this.eventData.tournamentFees).subscribe(data=>{
//       console.log(data);
//       var options = {
//         "key": "rzp_test_gdzLmWFRzOIDAm",// Enter the Key ID generated from the Dashboardr
//         "amount": "1000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//         "currency": "INR",
//         "name": "Acme Corp",
//         "description": "Test Transaction",
//         "image": "https://example.com/your_logo",
//         "order_id": data.id,
//       'handler':async (response:any)=>{
//         if(!this.flag){
//         await  this.userAuth.createTeam(this.teamName,this.userId).subscribe(data=>{
//           alert("created")
//           console.log(data)
//           this.teamId=data._id;
//           this.flag=true;
 
//         this.userAuth.applyForTournament(this.teamId,this.eventId).subscribe(data=>{
//           alert("success");
//           //this.router.navigate(['home',true]);
//           window.location.href ="http://localhost:4200/home";
//          });
// })
//         }else{
//         this.userAuth.applyForTournament(this.teamId,this.eventId).subscribe(data=>{
//           alert("success....");
//           //this.router.navigate(['home',true]);
//           window.location.href ="http://localhost:4200/home";
//         })
//       }
//  },
 
//         "prefill": {
//             "name": this.name,
//             "email": this.email,
//             "contact": this.mobile
//         },
//         "notes": {
//             "address": "Razorpay Corporate Office"
//         },
//         "theme": {
//             "color": "#3399cc"
//         }
 
//     };
 
 
//     var rzp1 = new  Razorpay(options);
//     rzp1.on('payment.failed', function (response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; payment_id: any; }; }; }){
//       alert(response.error.code);
//       alert(response.error.description);
//       alert(response.error.source);
//       alert(response.error.step);
//       alert(response.error.reason);
//       alert(response.error.metadata.order_id);
//       alert(response.error.metadata.payment_id);
// });
//     rzp1.open()
 
//   })
            }
            else
            alert("Ragistration Closed");
          }
          else
          alert("Ragistration is not Start");
        }
        else
        alert("You have already ragsitered with another tournament for this day");
     }
      else
      alert("You have already ragistered your team in this tournament")
 
  }
 
  ngOnInit(): void {
    this.eventId= this.activateRouter.snapshot.params['eventId'];
    this.userId= this.activateRouter.snapshot.params['userId'];
      this.userAuth.viewTournamentById(this.eventId).subscribe(data=>{
        this.eventData=data;
      });
      this.userAuth.viewTeamByOwnerId(this.userId).subscribe(data=>{
        console.log(data)
        if(data.length>0){
          for(let event of data[0].tournaments){
            this.tournamentIds.push(event._id);
            this.tournamentDates.push(event.tournamentStartDate)
          }
          this.teamName=data[0].name;
          this.teamId=data[0]._id;
          this.flag=true;
    console.log("team is already found")
        }
      });
      this.userAuth.viewProfile(this.userId).subscribe(data=>{
        console.log(data)
        this.teamData=data;
        this.name=data.name;
        this.email=data.email;
        this.mobile=data.mobile;
      })
 
 
  }
 
 
}
 

