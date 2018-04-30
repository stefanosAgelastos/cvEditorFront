import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppPersonalComponent } from './app-personal/app-personal.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { HttpClientModule } from "@angular/common/http";

import {PersonalService} from './personal.service';
import { ModalDirective } from './modal.directive';
import { AppDetailComponent } from './app-detail/app-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppPersonalComponent,
    AppContactComponent,
    ModalDetailComponent,
    ModalDirective,
    AppDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PersonalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
