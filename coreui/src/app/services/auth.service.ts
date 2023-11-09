import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
const AUTH_API = 'http://localhost:5000/api/';
const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  register(){
    console.log('register')
  }

  login(telephone:any,pin:any):Observable<any>{
    return this.http.post(AUTH_API+'auth/login/sms',{
      telephone,
      pin
    },httpOptions);
  }
}
