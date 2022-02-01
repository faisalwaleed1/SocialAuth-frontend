import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  constructor(public authService: AuthService) {
  }

}
