import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from 'src/app/shared/interfaceses';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
