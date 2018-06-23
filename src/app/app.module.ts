import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppPersonalComponent } from './app-personal/app-personal.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';

import {DetailService} from './detail.service';
import { ModalDirective } from './modal.directive';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserService } from './user.service';
import { AppWorkComponent } from './app-work/app-work.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppPersonalComponent,
    AppContactComponent,
    ModalDetailComponent,
    ModalDirective,
    AppDetailComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    AppWorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DetailService, UserService, AuthGuard,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
