import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { IUser } from 'src/app/shared/interfaceses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get user(): IUser {
    return this.userService.currentUser;
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

  openMenu(res: HTMLElement): void {

    if (res.classList.contains('hide')) {
      res.classList.remove('hide');
      res.classList.add('responsive');
    } else {
      res.classList.add('hide');
      res.classList.remove('responsive');
    }
  }

}
