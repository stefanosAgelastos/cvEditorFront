import { PersonalService } from './../personal.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Personal } from '../data-model';
import { ModalDetailComponent } from '../modal-detail/modal-detail.component';

@Component({
  selector: 'app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.scss']
})
export class AppDetailComponent implements OnInit {

  constructor() { }

  @Input() personalService : PersonalService;

  //list of all personal details
  personalDetails: Personal[];
  //flag for loading screen
  isLoading = false;
  //selected personal detail, passed to child PersonalDetailComponent
  selectedPersonal: Personal;


  @ViewChild(ModalDetailComponent)
  private detail: ModalDetailComponent;

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
      /* if this is an Update then we udpate the view data matching objects by id */
      this.personalDetails.forEach((p) => {
        if (p.id === data.id) {
          p.label = data.label;
          p.value = data.value;
          console.log("just replaced values of", p);
        }
      });
      /* else if the is a Create, backend assigns id and we push the returned Object for viewing  */
      if (!toSave.id) {
        this.personalDetails.push(data);
        console.log("just added the new personal: ", data);
      }
    });
  }


  /* present an empty modal for the user to enter data,
  populates it with a new Personal object,
  id is set to undefined, so that backend distinguishes it's Create and not Update,
  backend is responsible for assigning a valid id
   */
  newDetail() {
    var newOne = {
      id: undefined,
      label: "",
      value: ""
    }
    this.selectedPersonal = newOne;
  }

  /* deletes an Personal entry by id */
  delete(toDelete: Personal) {
    console.log("Attempting to delete id: " + toDelete.id);

    this.personalService.deletePersonal(toDelete).subscribe(data => {
      if (data.ok) {
        console.log("delete succesful, remove from view");
        this.personalDetails.splice(this.personalDetails.findIndex(h => h === toDelete), 1);
      }
    });
  }

}
