import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Personal, allPersonal } from './data-model';
import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';

@Injectable()
export class PersonalService {

  //url of local file
  //getAllUrl = "assets/data.json";

  //Url of mockup API
  //getAllUrl = "https://5f80d1fc-25c8-4ea0-8134-44ce5ae7ed79.mock.pstmn.io/getAll";
  //personalUrl = "http://localhost:8080/personal";
  delayMs = 500;

  constructor(private http: HttpClient,
    private personalUrl: string) { }

  getAllPersonal() {
    return this.http.get<Personal[]>(this.personalUrl, { responseType: "json" });

  }

  updatePersonal(personal: Personal) {
    return this.http.put<Personal>(this.personalUrl, personal);
  }

  deletePersonal(personal: Personal) {

    return this.http.delete(this.personalUrl + "/" + personal.id, { observe: "response" });
  }


  /* 
  // Fake server get; assume nothing can go wrong
  getAllPersonal(): Observable<Personal[]>{
    
    return of(allPersonal).delay(this.delayMs);
    // simulate latency with delay
  }
   */

  /*  
   // Fake server update; assume nothing can go wrong
   updatePersonal(personal: Personal): Observable<Personal> {
     const old = allPersonal.find(p => p.id === personal.id);
     const newOne = Object.assign(old, personal); // Demo: mutate cached hero
     return of(newOne).delay(this.delayMs); // simulate latency with delay
   }
  */
}