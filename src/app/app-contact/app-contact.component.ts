import { DetailService } from './../detail.service';
import { Component, OnInit } from '@angular/core';
import { contactServiceProvider } from '../detail.service.provider'

@Component({
  selector: 'app-contact',
  templateUrl: './app-contact.component.html',
  /* custom provider and factory method,
  fetches resourses from /contact */
  providers: [contactServiceProvider],
  styleUrls: ['./app-contact.component.scss']
})
export class AppContactComponent implements OnInit {

  //injected with service for API data persistence
  constructor( public service: DetailService) { }

  ngOnInit() {
  }

}
