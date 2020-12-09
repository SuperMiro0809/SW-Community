import { Component, OnInit, Input } from '@angular/core';
import { INew } from '../../shared/interfaceses';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() news: INew[];

  constructor() { }

  ngOnInit(): void {
  }

}
