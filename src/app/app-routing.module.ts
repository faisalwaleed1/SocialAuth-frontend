import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutePaths } from './shared/constants';

const redirectUnauthorizedToAuth = () => redirectUnauthorizedTo([AppRoutePaths.auth]);
const redirectAuthorizedToProfile = () => redirectLoggedInTo([AppRoutePaths.profile]);

const routes: Routes = [
  {
    path: AppRoutePaths.auth,
    pathMatch: 'full',
    component: AuthComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectAuthorizedToProfile }
  },
  {
    path: AppRoutePaths.profile,
    pathMatch: 'full',
    component: ProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToAuth }
  },
  {
    path: AppRoutePaths.default,
    redirectTo: AppRoutePaths.auth,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
