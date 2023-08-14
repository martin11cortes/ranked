import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

const UID = 'token';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<string | null>;

  constructor(
    private router: Router,
    private sb: MatSnackBar,
    private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<string | null>(null);
  }

  public get currentUser(): Observable<string | null> {
    return this.currentUserSubject.asObservable();
  }

  get isUserLoggedIn(): boolean {
    return window.localStorage.getItem(UID) !== null;
  }

  public login(username: string, password: string) {
    window.localStorage.removeItem(UID);
    this.http
      .post<{ token: string }>('http://localhost:3000/login', {
        username,
        password,
      })
      .subscribe({
        next: (value) => {
          window.localStorage.setItem(UID, value.token);
          this.router.navigate(['/']);
        },
        error: (err: Error) => {
          this.sb.open('Error: ' + err.message, 'Ok', { duration: 4000 });
        },
      });
  }

  public logout() {
    this.currentUserSubject.next(null);
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }
}
