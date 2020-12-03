import { RouterModule, Routes } from '@angular/router';
import { NewsPageComponent } from './news-page/news-page.component';
import { AddNewComponent } from './add-new/add-new.component';
import { NewDetailsComponent } from './new-details/new-details.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'news',
        pathMatch: 'full',
        component: NewsPageComponent,
        data: {
            isLogged: true
        }
    },
    {
        path: 'news/create',
        pathMatch: 'full',
        component: AddNewComponent,
        data: {
            isLogged: true
        }
    },
    {
        path: 'news/details/:id',
        pathMatch: 'full',
        component: NewDetailsComponent,
        data: {
            isLogged: true
        }
    }
];

export const NewsRoutingModule = RouterModule.forRoot(routes);