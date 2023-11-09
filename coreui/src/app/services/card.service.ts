import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:5000/api/';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { 

  }
  add(params:any){
    return this.http.post(AUTH_API + '',params,httpOptions)
  }
}
