import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  error: String;

  constructor(
    private newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitFormHandler(data): void {
    this.newsService.createNew(data).subscribe({
      next: () => {
        this.router.navigate(['/news'])
      },
      error: (err) => {
        this.error = err.error.message;
      }
    })
  }

}
