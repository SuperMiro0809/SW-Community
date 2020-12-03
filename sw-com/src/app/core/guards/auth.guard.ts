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
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
        let stream$: Observable<IUser | null>;
        let status: boolean

        const authRequired = route.data.isLogged;

        stream$ = this.userService.getUserStatus();
        
        return stream$.pipe(
            map((user) => {
                status = !!user;
                return typeof authRequired === 'boolean' && authRequired === status
            }),
            tap((canContinue) => {
                if(canContinue) {
                    return true;
                }else {
                    this.router.navigate(['']);
                    return false;
                }
            })
        )
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let stream$: Observable<IUser | null>;
        let status: boolean

        const authRequired = childRoute.data.isLogged;

        stream$ = this.userService.getUserStatus();
        
        return stream$.pipe(
            map((user) => {
                status = !!user;
                return typeof authRequired === 'boolean' && authRequired === status
            }),
            tap((canContinue) => {
                if(canContinue) {
                    return true;
                }else {
                    this.router.navigate(['']);
                    return false;
                }
            })
        )


        // if(this.userService.currentUser === undefined) {
        //     stream$ = this.userService.getUserStatus();
        // }else {
        //     stream$ = of(this.userService.currentUser);
        // }
        
        // return stream$.pipe(
        //     map((user) => {
        //       const isLoggedFromData = childRoute.data.isLogged;

        //       if(typeof authRequired == 'boolean' && authRequired === !!user) {
        //         return true;
        //       }else {
        //           return false
        //       }

        //       //return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user;
        //     }),
        //     tap((canContinue) => {
        //       if (canContinue) { return; }
        //       const url = this.router.url;
        //       this.router.navigateByUrl(url);
        //       return false;
        //     }),
        //   );
    }
}