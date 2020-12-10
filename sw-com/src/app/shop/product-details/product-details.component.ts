import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { IProduct, IUser } from 'src/app/shared/interfaceses';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  message: string;
  profile: IUser;

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.shopService.getProductById(id).subscribe({
      next: (data) => {
        this.userData();
        this.product = data;
      },
      error: (err) => {
        this.router.navigate(['/shop']);
      }
    })
  }

  userData() {
    this.userService.getProfile().subscribe((data) => {
      this.profile = data;
    })
  }

  buyHandler(id) {
    this.shopService.buyProduct(id).subscribe({
      next: (data) => {
        this.userData();
        this.message = data.message;
        this.product = data.product;
      },
      error: (err) => {
        this.router.navigate(['/shop']);
      }
    })
  }

  // get user() {
  //   return this.userService.currentUser;
  // }

}
