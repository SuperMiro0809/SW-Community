import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: 'users',
    children: [
        {
            path: 'register',
            component: RegisterComponent
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'profile',
            component: ProfileComponent
        },
        {
          path: 'cart',
          component: CartComponent
        }
    ]
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);