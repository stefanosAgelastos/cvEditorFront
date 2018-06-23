import { headersToString } from 'selenium-webdriver/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Detail } from './data-model/data-model';
import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';

@Injectable()
export class DetailService {

  constructor(private http: HttpClient,
    private personalUrl: string) { }

  getAllDetail() {
    return this.http.get<Detail[]>(this.personalUrl, { responseType: "json" });

  }

  updateDetail(personal: Detail) {
    return this.http.put<Detail>(this.personalUrl, personal);
  }

  addDetail(personal: Detail){
    return this.http.post<Detail>(this.personalUrl, personal);
  }

  deleteDetail(personal: Detail) {

    return this.http.delete(this.personalUrl + "/" + personal.id, { observe: "response" });
  }

}