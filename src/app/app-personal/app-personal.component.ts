import { PersonalService } from './../personal.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Personal } from '../data-model';
import 'rxjs/add/operator/finally';
import { PersonalDetailComponent } from '../personal-detail/personal-detail.component';

@Component({
  selector: 'app-app-personal',
  templateUrl: './app-personal.component.html',
  styleUrls: ['./app-personal.component.scss']
})
export class AppPersonalComponent implements OnInit {
  personalDetails: Personal[];
  isLoading = false;
  selectedPersonal: Personal;


  constructor(private personalService: PersonalService) { }

  @ViewChild(PersonalDetailComponent)
  private detail: PersonalDetailComponent;

  ngOnInit() {
    this.getPersonals();
  }

  getPersonals() {
    this.isLoading= true;
    this.personalService.getAllPersonal()
    //todo: erros handling
    .subscribe( data => /* {this.personalDetails = data;
     this.isLoading = false;} */
    console.log(data)
    );
    this.selectedPersonal = undefined;    
  }

  select(detail: Personal) {
    this.selectedPersonal = detail;
  }

  newDetail() {
    /* present an empty modal for the user to enter data */

  }

}