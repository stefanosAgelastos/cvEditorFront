import { AppWorkComponent } from './app-work/app-work.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPersonalComponent } from './app-personal/app-personal.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {
    path: 'personal',
    component: AppPersonalComponent,canActivate:[AuthGuard]
   /*  children: [{
      path: 'personalDetail',
      component: ModalDetailComponent
    }] */
  
  },
  {
    path: 'contact',
    component: AppContactComponent
  },
  {
    path: 'work',
    component: AppWorkComponent
  },
  /* authentication routes */
  /* { path: 'home', component: HomeComponent,canActivate:[AuthGuard] }, */
  {
      path: 'signup', component: UserComponent,
      children: [{ path: '', component: SignUpComponent }]
  },
  {
      path: 'login', component: UserComponent,
      children: [{ path: '', component: SignInComponent }]
  },
  { path : '', redirectTo:'/login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
