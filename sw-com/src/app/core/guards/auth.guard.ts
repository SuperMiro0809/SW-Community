import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { UserService } from '../../user/user.service';
import { IUser } from '../../shared/interfaceses';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivateChild, CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let stream$: Observable<IUser | null>;
        if (this.userService.currentUser === undefined) {
            stream$ = this.userService.getUserStatus();
        } else {
            stream$ = of(this.userService.currentUser);
        }

        return stream$.pipe(
            map((user) => {
                const isLoggedFromData = route.data.isLogged;
                return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user;
            }),
            tap((canContinue) => {
                if (canContinue) { return; }
                const url = this.router.url;
                this.router.navigateByUrl(url);
            }),
        );
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let stream$: Observable<IUser | null>;
        if (this.userService.currentUser === undefined) {
            stream$ = this.userService.getUserStatus();
        } else {
            stream$ = of(this.userService.currentUser);
        }

        return stream$.pipe(
            map((user) => {
                const isLoggedFromData = childRoute.data.isLogged;
                return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user;
            }),
            tap((canContinue) => {
                if (canContinue) { return; }
                const url = this.router.url;
                this.router.navigateByUrl(url);
            }),
        );
        // let userInfo;
        // const authRequired = childRoute.data.isLogged; 
        // this.userService.getUserStatus();
        // return this.userService.getProfile().pipe((data) => {
        //     if (typeof authRequired === 'boolean' && authRequired === !!data) {
        //         return true;
        //     }
        // });

        //    if(typeof authRequired === 'boolean' && authRequired === !!userInfo) {
        //        return true;
        //    }

        //    const url = this.router.url;
        //    this.router.navigateByUrl(url);
        //    return false;
        // this.router.navigate(['']);
        // return false;
        //return true;
    }
}