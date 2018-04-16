import { PersonalService } from './../personal.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Personal } from '../data-model';
import 'rxjs/add/operator/finally';
import { PersonalDetailComponent } from '../personal-detail/personal-detail.component';

@Component({
  selector: 'app-app-personal',
  templateUrl: './app-personal.component.html',
  providers: [PersonalService],
  styleUrls: ['./app-personal.component.scss']
})
export class AppPersonalComponent implements OnInit {

  //injected with service for API data persistence
  constructor(private personalService: PersonalService) { }

  //list of all personal details
  personalDetails: Personal[];
  //flag for loading screen
  isLoading = false;
  //selected personal detail, passed to child PersonalDetailComponent
  selectedPersonal: Personal;


  @ViewChild(PersonalDetailComponent)
  private detail: PersonalDetailComponent;

  //lifecycle hook
  ngOnInit() {
    this.getPersonals();
  }

  //calls service observable and retrieves all personal details for displaying
  getPersonals() {
    this.isLoading = true;
    this.personalService.getAllPersonal()
      //todo: errors handling
      .subscribe(data => {
        this.personalDetails = data;
        this.isLoading = false;
      }
      );
    this.selectedPersonal = undefined;
  }

  //called when clicking on personal detail card in template
  select(detail: Personal) {
    console.log("selecting ", detail);
    //value different than undefined/null enables the PersonalDetailComponent
    this.selectedPersonal = detail;
  }

  //listens for child's event
  closeChildComponent(toSave: Personal) {
    if (toSave != null) {
      console.log("I should save detail: ", toSave);
      this.updatePersonal(toSave);

    }
    this.selectedPersonal = undefined;
  }

  /* uses PersonalService for sending PUT request to backend,
  and updates this.personalDetails */
  updatePersonal(toSave: Personal) {
    this.personalService.updatePersonal(toSave).subscribe(data => {
      this.personalDetails.forEach((p) => {
        if (p.id === data.id) {
          p.label = data.label;
          p.value = data.value;
          console.log("just replaced values of", p);
        }
      });
    });
  }

  newDetail() {
    /* present an empty modal for the user to enter data */

  }

}