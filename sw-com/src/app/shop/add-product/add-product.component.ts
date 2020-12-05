import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  error: String;

  constructor(
    private shopService: ShopService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitFormHandler(data): void {
    this.shopService.createProduct(data).subscribe({
      next: () => {
        this.router.navigate(['/shop'])
      },
      error: (err) => {
        this.error = err.error.message;
      }
    })
  }

}
