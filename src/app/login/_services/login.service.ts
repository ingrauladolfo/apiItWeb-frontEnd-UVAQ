import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.checkSession().subscribe((response: any) => {
        if (response.status === true) {
          resolve(true);
        } else {
          localStorage.removeItem('sessionkey');
          this.router.navigateByUrl('/error/access');
          resolve(false);
        }
      });
    });
  }

  checkSession() {
    const sessionKey = localStorage.getItem('sessionkey');

    const params = new HttpParams().set('session_key', sessionKey);

    return this.http.get('http://api.itweb.com/v1/system/login', { params });
  }

  login(data: any): Observable<any> {

    const dataRequest = new HttpParams({ fromObject: data});

    return this.http.post('http://api.itweb.com/v1/system/login', dataRequest);

  }

}
