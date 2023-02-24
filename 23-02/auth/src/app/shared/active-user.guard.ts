import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ActiveUserGuard implements CanActivate {
  constructor(private service: AuthService, private route: ActivatedRoute) {
    this.service
      .getUser(this.route.snapshot.params['id'])
      .subscribe((res) => (this.userData = res));
  }
  userData: any;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(this.userData);
    return true;
  }
}
