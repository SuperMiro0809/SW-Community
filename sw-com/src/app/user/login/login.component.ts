import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitFormHandler(data) {
    this.userService.login(data).subscribe( {
      next: () => {
        this.router.navigate(['']);
      },
      error: (err) => {
        this.error = err.error.message;
      }
    });
  }

}
