import { DetailService } from './../detail.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';
import { personalServiceProvider } from '../personal.service.provider';

@Component({
  selector: 'app-personal',
  templateUrl: './app-personal.component.html',
  /* custom provider and factory method,
  fetches resourses from /personal*/
  providers: [personalServiceProvider],
  styleUrls: ['./app-personal.component.scss']
})
export class AppPersonalComponent implements OnInit {

  //injected with service for API data persistence
  constructor(private service: DetailService) { }

  ngOnInit() {
  }
}