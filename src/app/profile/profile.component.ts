import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  currentUser: firebase.User | null = firebase.auth().currentUser;

  constructor(public authService: AuthService) {
  }

}
