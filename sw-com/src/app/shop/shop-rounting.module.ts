import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
    {
        path: 'shop',
        pathMatch: 'full',
        component: ShopListComponent
    },
    {
        path: 'shop/add',
        pathMatch: 'full',
        component: AddProductComponent
    },
    {
        path: 'shop/details/:id',
        pathMatch: 'full',
        component: ProductDetailsComponent
    }
];

export const ShopRoutingModule = RouterModule.forRoot(routes);