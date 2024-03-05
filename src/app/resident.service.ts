import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {
  private  API_URL = "http://localhost:8000";
  //export const API_URL = "https://visitor-server-render.onrender.com";
  
  constructor(private http: HttpClient) { }

  addResident(data:any){
    return this.http.post(`${this.API_URL}/api/v1/users/register`, data);
  }

  getResident(){
    return this.http.get(`${this.API_URL}/api/v1/users/getresidents`);
  }
}
