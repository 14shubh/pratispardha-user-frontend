import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  signupApi = ' ';
  signipApi = ' ';

  constructor(private _http:HttpClient) { }

  public register(user:User):Observable<User> {
   return this._http.post<any>(this.signupApi, user);
  }

  public login(user:User):Observable<any>{
    return this._http.post<any>(this.signipApi,user);
  }

}
