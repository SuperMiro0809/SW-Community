import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShopRoutingModule } from './shop-rounting.module';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    ShopListComponent, 
    ShopItemComponent, 
    AddProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule

  ]
})
export class ShopModule { }
