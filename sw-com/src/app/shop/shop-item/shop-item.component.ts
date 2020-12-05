import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaceses';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input() products: IProduct[]
  constructor() { }

  ngOnInit(): void {
  }

}
