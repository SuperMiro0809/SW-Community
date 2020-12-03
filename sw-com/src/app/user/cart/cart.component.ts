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

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe((data) => {
      this.user = data;
    })
  }

}
