import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { UserService } from './_services/user.service.';
import { Router, ActivatedRoute, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {
    }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('AuthGuard#canActivate called::::for the url:::' + state.url);
        let url: string = state.url;
        return this.checkUserLoggedIn(url);
    }


     checkUserLoggedIn(url: string): boolean {
        if (this.userService.isUserLoggedIn()) { return true; }
        // Store the attempted URL for redirecting
        this.userService.redirectUrl = url;

        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
  }

}