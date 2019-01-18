import { AuthGuard } from './../auth.guard';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {


  constructor(private router: Router, private guard: AuthGuard, private userService: UserService) {
    guard.itemValue.subscribe((nextValue) => {
      this.logedIn = nextValue;
    })
  }

  logedIn: boolean;

  ngOnInit() { }


  Logout() {
    localStorage.removeItem('userToken');
    this.logedIn = false;
    this.router.navigate(['/login']);
  }

  TestDrive() {
    this.userService.userAuthentication("sas", "sas").subscribe((data: any) => {
      localStorage.setItem('userToken', data.token);
      this.router.navigate(['/personal']);
    },
      (err: HttpErrorResponse) => {
        //TODO: Do nothing for the moment
      });
  }

}
