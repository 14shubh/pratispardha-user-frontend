import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Team } from '../model/team';
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
  public updateProfile(user:User):Observable<any>{
    let url="https://spardhaa.herokuapp.com/update-profile"
    return this._http.post<any>(url,user);
  }
  public viewProfile(playerId:string):Observable<any>{
    let url="https://spardhaa.herokuapp.com/view-profile/"+playerId;
    return this._http.get<any>(url);
  }
  public requestPlayer(user:User):Observable<any>{
    let url="https://spardhaa.herokuapp.com/request-player/"+user.playerId+"/"+user.teamId+"/"+user.tournamentId;
    return this._http.get<any>(url);
  }
  public acceptRequest(user:User):Observable<any>{
    let url="https://spardhaa.herokuapp.com/accept-request/"+user.playerId+"/"+user.resquestId+"/"+user.teamId+"/"+user.tournamentId;
    return this._http.get<any>(url);
  }
  public rejectRequest(user:User):Observable<any>{
    let url="https://spardhaa.herokuapp.com/reject-request/"+user.playerId+"/"+user.resquestId;
    return this._http.get<any>(url);
  }
  public createTeam(team:Team):Observable<any>{
    let url="https://spardhaa.herokuapp.com/team/create-team";
    return this._http.post<any>(url,team);
  }
  public viewTeamByTeamId(team:Team):Observable<any>{
    let url="https://spardhaa.herokuapp.com/team/view-team/"+team.teamId;
    return this._http.get<any>(url);
  }
  public viewTeamByOwnerId(team:Team):Observable<any>{
    let url="https://spardhaa.herokuapp.com/team/view-team-by-ownerId/"+team.ownerId;
    return this._http.get<any>(url);
  }
  public viewTeamList():Observable<any>{
    let url="https://spardhaa.herokuapp.com/team/view-team-list";
    return this._http.get<any>(url);
  }
  public viewTournaments():Observable<any>{
    let url="https://spardhaa.herokuapp.com/tournament/view-tournament";
    return this._http.get<any>(url);
  }
  public viewTournamentById(tournamentId:String):Observable<any>{
    let url="https://spardhaa.herokuapp.com/tournament/view-tournament/"+tournamentId;
    return this._http.get<any>(url);
  }
}
 
 
 
 
 

