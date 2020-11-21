import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfComponent } from './mf/mf.component';



@NgModule({
  declarations: [
    MfComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MfComponent
  ]
})
export class SharedModule { }
