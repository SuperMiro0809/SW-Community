import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from 'src/app/shared/interfaceses';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe((data) => {
      this.user = data;
    })
  }

  changePasswordHandler() {
    this.inEditMode = !this.inEditMode;
  }

  logoutHandler() {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/users/login']);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  submitFormHandler(data) {
    this.userService.changePassword(data).subscribe({
      next: (res) => {
        this.message = (res as any).message;
        of(this.message).pipe(delay(1000)).subscribe(x => {
          this.logoutHandler();
        })
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
