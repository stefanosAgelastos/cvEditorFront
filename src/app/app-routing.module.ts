import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPersonalComponent } from './app-personal/app-personal.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';



const routes: Routes = [
  {
    path: 'personal',
    component: AppPersonalComponent,
    children: [{
      path: 'personalDetail',
      component: PersonalDetailComponent
    }]
  
  },
  {
    path: 'contact',
    component: AppContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
