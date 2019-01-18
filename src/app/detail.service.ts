
import 'rxjs/add/operator/delay';
import { Detail } from './data-model/data-model';
import { HttpClient } from '@angular/common/http';


export class DetailService {

  constructor(private http: HttpClient,
    private apiUrl: string) { }

  getAllDetail() {
    return this.http.get<Detail[]>(this.apiUrl, { responseType: "json" });

  }

  updateDetail(personal: Detail) {
    return this.http.put<Detail>(this.apiUrl, personal);
  }

  addDetail(personal: Detail){
    return this.http.post<Detail>(this.apiUrl, personal);
  }

  deleteDetail(personal: Detail) {

    return this.http.delete(this.apiUrl + "/" + personal.id, { observe: "response" });
  }

}