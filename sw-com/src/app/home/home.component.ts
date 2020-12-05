import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { IUser } from '../shared/interfaceses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //user: IUser;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  get user(): IUser {
    return this.userService.currentUser;
  }

}
