import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'HOME'
    }
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);