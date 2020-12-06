import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { INew } from 'src/app/shared/interfaceses';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  news: INew | INew[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.newsService.getAllNews(0).subscribe((data) => {
      this.news = data;
    })
  }

}
