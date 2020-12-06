import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from 'src/app/shared/interfaceses';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user: IUser;
  message: string;

  constructor(
    private userService: UserService
  ) { 
  }

  ngOnInit(): void {
    this.userData();
  }

  userData() {
    this.userService.getCart().subscribe((data) => {
      this.user = data;
    })
  }

  deleteHandler(id) {
    this.userService.removeFromCart(id).subscribe({
      next: (data) => {
        this.message = (data as any).message;
        this.userData();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
