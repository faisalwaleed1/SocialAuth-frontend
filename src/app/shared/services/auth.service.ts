import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AppRoutePaths, ErrorMessages } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public angularFireAuth: AngularFireAuth, private router: Router) {
  }

  public facebookLogin() {
     this.firebaseLogin(new firebase.auth.FacebookAuthProvider());
  }

  public async firebaseLogin(provider: firebase.auth.AuthProvider) {
    try {
      await this.angularFireAuth.signInWithPopup(provider);

      this.router.navigate([AppRoutePaths.profile]);
    } catch(error) {
      alert(ErrorMessages.login);
    }
  }

  public async firebaseLogout() {
    try {
      await this.angularFireAuth.signOut();

      this.router.navigate([AppRoutePaths.auth]);
    } catch(error) {
      alert(ErrorMessages.logout);
    }
  }
}
