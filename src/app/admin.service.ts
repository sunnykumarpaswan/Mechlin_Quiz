import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http:HttpClient) { }
  checkarray=[]
  messagealert(){
    alert('Thank You For Suscribe And Thank You For Making This Angular For Me');
  }
  product="Lapy"

  adminlogin():Observable<any> {
    return this.http.get('http://localhost:5000/common/modals/admin')
  }
}