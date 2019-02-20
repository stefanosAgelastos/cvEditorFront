import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://ec2-54-93-66-2.eu-central-1.compute.amazonaws.com';
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {
      username: user.username,
      password: user.password,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/register', body,{headers : reqHeader});
  }

  userAuthentication(username, password) {
 /*   
 Not working for SPRING
 var data = "username=" + username + "&password=" + password + "&grant_type=password"; */
    var data = {"username": username,
                "password": password};
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/auth', data, { headers: reqHeader });
  }

  getUserClaims(){
   return  this.http.get(this.rootUrl+'/user');
  }

}
