import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { IProduct } from 'src/app/shared/interfaceses';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  products: IProduct[];

  constructor(
    private shopService: ShopService
  ) { }

  ngOnInit(): void {
    this.shopService.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }

}
