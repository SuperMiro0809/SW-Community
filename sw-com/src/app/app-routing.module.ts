import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuard ],
    data: {
      title: 'HOME',

    }
  },
  {
    path: '**',
    canActivate: [ AuthGuard ],
    component: NotFoundComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);