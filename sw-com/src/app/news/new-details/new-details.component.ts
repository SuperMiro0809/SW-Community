import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { INew, IUser } from 'src/app/shared/interfaceses';
import { UserService } from 'src/app/user/user.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.css']
})
export class NewDetailsComponent implements OnInit {
  post: INew;
  profile: IUser;
  message: string;

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.newsService.getNewById(id).subscribe({
      next: (data) => {
        this.post = data;
        this.userData();
      },
      error: (err) => {
        this.router.navigate(['/news']);
      }
    })
    
  }

  userData() {
    this.userService.getProfile().subscribe((data) => {
      this.profile = data;
    })
  }

  deleteHandler(id) {
    this.newsService.deleteNewById(id).subscribe({
      next: (data) => {
        this.message = data.message;
        of(this.message).pipe(delay(1000)).subscribe(x => {
          this.router.navigate(['/news']);
        })
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
