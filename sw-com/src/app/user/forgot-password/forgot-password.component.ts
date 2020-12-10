import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, fromEvent, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  message: string;
  error: string;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitFormHandler(data, el) {
    this.userService.forgotPassword(data).subscribe({
      next: (res) => {
        this.message = (res as any).message;
        of(this.message).pipe(delay(2000)).subscribe(x => {
          this.router.navigate(['/users/login'])
        })
      },
      error: (err) => {
        this.error = err.error.message;
        console.error(err);
      }
    })
  }

}
