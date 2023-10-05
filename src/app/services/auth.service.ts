import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/** custome import */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject<any>('')
  token: any;
  url = "http://localhost:8000/"
  token$ = new BehaviorSubject<any>('')
  themeToggle$ = new BehaviorSubject<any>(false)
  /** set header common values */
  private headers = new HttpHeaders(
    {
      Accept:"application/json, text/plain, application/xml, , text/event-stream */*",
      "Content-Type": "application/json",
    }
  );
  
  tokenHeaders: any;
  isLoggedIn = new BehaviorSubject(false);
  constructor(private http: HttpClient, public router: Router) {
    let token = localStorage.getItem('token')
    if (localStorage.getItem('token')) {
      this.tokenHeaders = this.headers.append('Authorization', `Bearer ${token}`)
    }
  }


  /** login */
  login(values: any): Observable<any> {
    return this.http.post(this.url + "login", values, { headers: this.headers }).pipe(
      map((data: any) => {
        this.isLoggedIn.next(true);
        return data;
      })
    )
  }

  /** signup */
  signup(values: any): Observable<any> {
    return this.http.post(this.url + "register", values).pipe(
      map((data: any) => {
        return data;
      })
    )
  }


  /** get user data */
  getUserData(values: any): Observable<any> {
    let token = localStorage.getItem('token')
    if (!this.tokenHeaders) {
      this.tokenHeaders = this.headers.append('Authorization', `Bearer ${token}`)
    }
    else{
      this.tokenHeaders = this.tokenHeaders
    }
    return this.http.get(this.url + "me", { headers: this.tokenHeaders }).pipe(
      map((data: any) => {
        return data;
      })
    )
  }



  /** get user detail to manage header */
  getUser() {
    if (localStorage.getItem('token') !== null) {
      let obj = {
        token: localStorage.getItem('token'),
      }
      this.user$.next(obj)
    }
    else {
      this.user$.next('')
    }
  }

  /** logout user */

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('link_token')
    this.user$.next('')
    this.router.navigateByUrl("/")
    this.themeToggle$.next(false)
    this.isLoggedIn.next(false);
  }

}
