import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'users',
    canActivateChild: [
      AuthGuard
    ],
    children: [
        {
            path: 'register',
            component: RegisterComponent,
            data: {
              isLogged: false
            }
        },
        {
            path: 'login',
            component: LoginComponent,
            data: {
              isLogged: false
            }
        },
        {
            path: 'profile',
            component: ProfileComponent,
            data: {
              isLogged: true
            }
        },
        {
          path: 'cart',
          component: CartComponent,
          data: {
            isLogged: true
          }
        }
    ]
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);