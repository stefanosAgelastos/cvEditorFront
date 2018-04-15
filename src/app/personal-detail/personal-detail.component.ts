import { PersonalService } from './../personal.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personal } from '../data-model';


@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent implements OnInit {

  personalForm: FormGroup;
  selected: boolean;
  @Input() detail: Personal;
  
  personal: Personal;
  constructor(private fb: FormBuilder, private service: PersonalService) { }

  /* I placed the call to createForm() here because 
  it wouldn't work in the constructor  */
  ngOnInit() {
    this.createForm();
  }

  

  createForm() {
    this.personalForm = this.fb.group({
      label: ['', Validators.required],
      value: ['', Validators.required]
    });
    this.rebuildForm();
  }
  
  rebuildForm(){
    this.personalForm.patchValue(this.detail);
  }
  
/*    onSubmit(){
    this.detail = this.prepareDetail();
    this.service.updatePersonal(this.detail).subscribe();
    this.rebuildForm();
  }  */

  prepareDetail(): Personal {
    const formModel = this.personalForm.value;
    const detailToSave: Personal = {
      id : this.detail.id,
      label : formModel.label as string,
      value : formModel.value as string      
    };
    return detailToSave;
  }
}

