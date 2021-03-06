import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'shop',
        pathMatch: 'full',
        component: ShopListComponent,
        canActivate: [ AuthGuard ],
        data: {
          isLogged: true
        }
    },
    {
        path: 'shop/add',
        pathMatch: 'full',
        component: AddProductComponent,
        canActivate: [ AuthGuard ],
        data: {
          isLogged: true
        }
    },
    {
        path: 'shop/details/:id',
        pathMatch: 'full',
        component: ProductDetailsComponent,
        canActivate: [ AuthGuard ],
        data: {
          isLogged: true
        }
    }
];

export const ShopRoutingModule = RouterModule.forRoot(routes);