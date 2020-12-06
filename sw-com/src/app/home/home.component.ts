import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { IUser, INew } from '../shared/interfaceses';
import { NewsService } from '../news/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: INew | INew[];

  constructor(
    private userService: UserService,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.newsService.getAllNews(4).subscribe((data) => {
      this.news = data;
    })
  }

  get user(): IUser {
    return this.userService.currentUser;
  }

}
