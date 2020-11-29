import { RouterModule, Routes } from '@angular/router';
import { NewsPageComponent } from './news-page/news-page.component';
import { AddNewComponent } from './add-new/add-new.component';

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
  }
];

export const NewsRoutingModule = RouterModule.forRoot(routes);