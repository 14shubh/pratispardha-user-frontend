import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { User} from '../../model/user'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User = new User('','','','','');
  constructor(private _userAuth: UserAuthService) { }

  public playerType(event:any){
     this.user.playerType = event.target.value;
     
  }
  
  public SignUp(){
    if(this.user.playerType=="0")
     alert("Please Select the type")
    console.log(this.user);
    this._userAuth.register(this.user).subscribe((data)=>{
      console.log(data);
      alert("Success");
    },(err)=>{
      console.log(err);
    })
  }
  
  ngOnInit(): void {
  }

}
