import { PersonalService } from './../personal.service';
import { Component, OnInit } from '@angular/core';
import { contactServiceProvider } from '../personal.service.provider';

@Component({
  selector: 'app-contact',
  template: '<app-detail [personalService]="service"></app-detail > ',
  
  /* custom provider and factory method,
  fetches resourses from /contact */
  providers: [contactServiceProvider],
  styleUrls: ['./app-contact.component.scss']
})
export class AppContactComponent implements OnInit {

  constructor(private service: PersonalService) { }

  ngOnInit() {
  }

}
