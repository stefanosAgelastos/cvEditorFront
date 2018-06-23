import { DetailService } from './../detail.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Detail } from '../data-model/data-model';
import { ModalDetailComponent } from '../modal-detail/modal-detail.component';

@Component({
  selector: 'app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.scss']
})
export class AppDetailComponent implements OnInit {

  constructor() { }

  @Input() detailService: DetailService;

  //list of all personal details
  personalDetails: Detail[];
  //flag for loading screen
  isLoading = false;
  //selected personal detail, passed to child PersonalDetailComponent
  selectedPersonal: Detail;


  @ViewChild(ModalDetailComponent)
  private detail: ModalDetailComponent;

  //lifecycle hook
  ngOnInit() {
    this.getDetails();
  }

  //calls service observable and retrieves all personal details for displaying
  getDetails() {
    this.isLoading = true;
    this.detailService.getAllDetail()
      //todo: errors handling
      .subscribe(data => {
        this.personalDetails = data;
        this.isLoading = false;
      }
      );
    this.selectedPersonal = undefined;
  }

  //called when clicking on personal detail card in template
  select(detail: Detail) {
    console.log("selecting ", detail);
    //value different than undefined/null enables the PersonalDetailComponent
    this.selectedPersonal = detail;
  }

  //listens for child's event
  closeChildComponent(toSave: Detail) {
    if (toSave != null) {
      console.log("I should save detail: ", toSave);
      this.updateDetail(toSave);

    }
    this.selectedPersonal = undefined;
  }

  /* uses PersonalService for sending PUT or POST request to backend,
  and updates or creates this.personalDetails */
  updateDetail(toSave: Detail) {
    if (toSave.id) {
      /* if this is an Update we send a PUT request to the backend,
      and then we udpate the view data matching objects by id */
      this.detailService.updateDetail(toSave).subscribe(data => {
        this.personalDetails.forEach((p) => {
          if (p.id === data.id) {
            p.label = data.label;
            p.value = data.value;
            console.log("just replaced values of", p);
          }
        });
      });
    }
    else {
      /* else if the is a Create, we send a POST request to the backend,
      and then we add the new Detail to the view */
      this.detailService.addDetail(toSave).subscribe(data => {
        this.personalDetails.push(data);
        console.log("just added the new personal: ", data);
      });
    }
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
  delete(toDelete: Detail) {
    console.log("Attempting to delete id: " + toDelete.id);

    this.detailService.deleteDetail(toDelete).subscribe(data => {
      if (data.ok) {
        console.log("delete succesful, remove from view");
        this.personalDetails.splice(this.personalDetails.findIndex(h => h === toDelete), 1);
      }
    });
  }

}
