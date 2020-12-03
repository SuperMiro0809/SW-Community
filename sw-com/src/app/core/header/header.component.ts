import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { IUser } from 'src/app/shared/interfaceses';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: IUser;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe((data) => {
      this.user = data;
  });
  }

  // get user() {
  //   return this.userService.getProfile().subscribe((data) => {
  //     return data;
  //   });
  // }

  openMenu(res: HTMLElement):void {
    
    if(res.classList.contains('hide')) {
        res.classList.remove('hide');
        res.classList.add('responsive');
    }else {
        res.classList.add('hide');
        res.classList.remove('responsive');
    }
  }

}
