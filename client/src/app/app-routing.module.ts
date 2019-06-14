import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { UserlistComponent } from './userlist/userlist.component';
import { EditComponent } from './auth/edit/edit.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WelcomeComponent } from './welcome/welcome.component';
// const routes: Routes = [
//   { path: '', component: WelcomeComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'training', component: TrainingComponent }
// ];

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'homea',
    component: WelcomeComponent,
  },
  {
    path: 'home',
    component: NavigationComponent,
  },
  
  {
    path: 'signup',
    component: SignupComponent,
  },
  
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'userlist',
    component: UserlistComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
