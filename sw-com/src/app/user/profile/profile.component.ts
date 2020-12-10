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
  inEditMode = false;
  message: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe((data) => {
      this.user = data;
    })
  }

  changePasswordHandler() {
    this.inEditMode = !this.inEditMode;
  }

  submitFormHandler(data) {
    this.userService.changePassword(data).subscribe({
      next: (res) => {
        this.message = (res as any).message;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
