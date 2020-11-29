import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsItemComponent } from './news-item/news-item.component';
import { AddNewComponent } from './add-new/add-new.component';



@NgModule({
  declarations: [
    NewsPageComponent,
    NewsItemComponent,
    AddNewComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
