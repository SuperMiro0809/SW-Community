import { RouterModule, Routes } from '@angular/router';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [
  {
      path: 'news',
      pathMatch: 'full',
      component: NewsPageComponent
  }
];

export const NewsRoutingModule = RouterModule.forRoot(routes);