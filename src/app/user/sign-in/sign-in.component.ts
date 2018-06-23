import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(username,password){
     this.userService.userAuthentication(username,password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.token);
      this.router.navigate(['/personal']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}
