import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/user';
 
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
 
 
  constructor(private _http:HttpClient) { }
 
  public register(user:User):Observable<User> {
    let url="https://spardhaa.herokuapp.com/signup"
   return this._http.post<any>(url, user);
  }
 
  public login(user:User):Observable<any>{
    let url="https://spardhaa.herokuapp.com/signin"
    return this._http.post<any>(url,user);
  }
  public signinWithGoogle(email:String):Observable<any>{
    let url="https://spardhaa.herokuapp.com/signin-with-google"
    return this._http.post<any>(url,{email:email})
  }
 
  public playerList():Observable<any>{
    let url="https://spardhaa.herokuapp.com/view-players"
    return this._http.get<any>(url);
  }
}
 

