import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Personal, allPersonal } from './data-model';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class PersonalService {

  private getAllUrl: "c2c2d7e8-ee59-4785-b7d1-1025b9a4808f.mock.pstmn.io/getAll";

  delayMs = 500;

  constructor(private http: HttpClient) { }

  getAllPersonal() {
    return this.http.get(this.getAllUrl);

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