import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveUser(user:any):void {
    window.sessionStorage.removeItem('auth')
    window.sessionStorage.setItem('auth',JSON.stringify(user))
  }
  
  public getUser():any {
    const user = window.sessionStorage.getItem('auth')
    if(user){
      return JSON.parse(user);
    }
  }
}
