import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsItemComponent } from './news-item/news-item.component';
import { AddNewComponent } from './add-new/add-new.component';
import { NewDetailsComponent } from './new-details/new-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NewsPageComponent,
    NewsItemComponent,
    AddNewComponent,
    NewDetailsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ]
})
export class NewsModule { }
