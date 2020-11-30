import { RouterModule, Routes } from '@angular/router';
import { NewsPageComponent } from './news-page/news-page.component';
import { AddNewComponent } from './add-new/add-new.component';
import { NewDetailsComponent } from './new-details/new-details.component';

const routes: Routes = [
  {
      path: 'news',
      pathMatch: 'full',
      component: NewsPageComponent,
  },
  {
      path: 'news/create',
      pathMatch: 'full',
      component: AddNewComponent
  },
  {
      path: 'news/details/:id',
      pathMatch: 'full',
      component: NewDetailsComponent
  }
];

export const NewsRoutingModule = RouterModule.forRoot(routes);