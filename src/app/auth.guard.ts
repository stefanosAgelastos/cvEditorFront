import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  
  itemValue : Subject<boolean>;
  
  constructor(private router : Router){
    /* Observable that is used to broadcast whenever a user logs in or logs out */
    this.itemValue = new Subject();
  }  

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('userToken') != null){
        this.itemValue.next(true);
        return true;
      }
      this.router.navigate(['/login']);
      this.itemValue.next(false);
      return false;
  }
}
