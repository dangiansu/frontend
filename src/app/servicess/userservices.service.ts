import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  constructor(private http:HttpClient,private router:Router){}
  userregisteration(userregisterdata:any){
    const api = environment.apiUrl
    console.log()
    return this.http.post(`${environment.apiUrl}/register`,userregisterdata)
  }

  userlogin(userlogindata:any){
    return this.http.post(`${environment.apiUrl}/login`,userlogindata)
  }

}
