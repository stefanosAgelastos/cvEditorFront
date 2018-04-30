import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personal } from '../data-model';


@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss']
})

export class ModalDetailComponent implements OnInit {


  personalForm: FormGroup;


  /* recieves the personal detail object to edit */
  @Input() detail: Personal;

  /* event to be emmited to the parent component for closing the DOM object */
  @Output() onClose = new EventEmitter<Personal>();

  /* current Personal Detail being edited */
  personal: Personal;

  /* injected with a form builder */
  constructor(private fb: FormBuilder) { }

  /* I placed the call to createForm() here because 
  it wouldn't work in the constructor  */
  ngOnInit() {
    this.createForm();
  }

  /* registers the FormControls to the FormGroup */
  createForm() {
    this.personalForm = this.fb.group({
      label: ['', Validators.required],
      value: ['', Validators.required]
    });
    this.rebuildForm();
  }

  /* Inserts Personal Detail's data to the form */
  rebuildForm() {
    this.personalForm.patchValue(this.detail);
  }

  /*   trigered when user closes the edit Modal. */
  close(toSave: Personal) {
    //case: no changes, mother component doesnt 
    if (this.personalForm.pristine) {
      this.onClose.emit(null);
    } else {
      this.onClose.emit(this.prepareDetail());
    }
  }
  /* returns the data from the FormModel to a new Personal instance,
  keeps the id field of the original instance */
  prepareDetail(): Personal {
    const formModel = this.personalForm.value;
    const detailToSave: Personal = {
      id: this.detail.id,
      label: formModel.label as string,
      value: formModel.value as string
    };
    return detailToSave;
  }
}

