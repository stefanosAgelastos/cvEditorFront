import { AuthGuard } from './../auth.guard';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {


  constructor(private router: Router, private guard: AuthGuard) {
    guard.itemValue.subscribe((nextValue)=>{
      this.logedIn = nextValue;
    })
  }

  logedIn: boolean;

  ngOnInit() {  }


  Logout() {
    localStorage.removeItem('userToken');
    this.logedIn = false;
    this.router.navigate(['/login']);
  }


}
