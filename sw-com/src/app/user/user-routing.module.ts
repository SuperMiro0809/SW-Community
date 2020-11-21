import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    children: [
        {
            path: 'register',

        },
        {
            path: 'login',
        },
        {
            path: 'logout'
        },
        {
            path: 'profile'
        }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);