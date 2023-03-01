import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  login(email: any, password: any) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        console.log(res);
        console.log('user data' + res.user?.uid);

        alert('Login Successfully ');
        sessionStorage.setItem('token', res.user?.uid ?? '');
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  register(email: any, password: any) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('Register Successfully ');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  logOut() {
    this.fireauth.signOut().then(
      () => {
        sessionStorage.clear();
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
