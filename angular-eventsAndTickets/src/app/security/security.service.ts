import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { authenticationResponse, userCredentials } from './security.models';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + "/accounts";
  private tokenKey: string = 'token';

  isAuthenticated(): boolean{
    const token = localStorage.getItem(this.tokenKey);

    if(!token){
      return false;
    }
      return true;
    
  }

  getFieldFromJWT(field: string): string{
    const token = localStorage.getItem(this.tokenKey);
    if(!token){return '';}
      const dataToken = JSON.parse(atob(token.split('.')[1]));
      return dataToken[field];

  }

  logout(){
    localStorage.removeItem(this.tokenKey);
  }

  getRole(): string{
    return '';
  }

  register(userCredentials: userCredentials): Observable<authenticationResponse>{
    return this.http.post<authenticationResponse>(this.apiURL+"/create", userCredentials)
  }

  login(userCredentials: userCredentials): Observable<authenticationResponse>{
    return this.http.post<authenticationResponse>(this.apiURL+"/login", userCredentials)
  }

  saveToken(authenticationResponse: authenticationResponse){
    localStorage.setItem(this.tokenKey, authenticationResponse.token);
  }
}
