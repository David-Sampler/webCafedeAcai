import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  Url =' https://wilsonacai.herokuapp.com/';
  //apiUrl = 'http://localhost:3000';


  constructor(private http: HttpClient) {

  }

  getmsg(): Observable<any> {
    console.log("Bem vindo primeia parte")
    return this.http.get<any>(this.Url,this.httpOptions)
  }

 postEmail(email: any): Observable<any> {
    console.log("Ta chegando aqui tambem")
    return this.http.post<any>(this.Url + "enviar", email,this.httpOptions)
  }
}
