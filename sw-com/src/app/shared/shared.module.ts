import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfComponent } from './mf/mf.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { ImageUrlValidatorDirective } from './image-url-validator.directive';



@NgModule({
  declarations: [
    MfComponent,
    EmailValidatorDirective,
    ImageUrlValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MfComponent,
    EmailValidatorDirective,
    ImageUrlValidatorDirective
  ]
})
export class SharedModule { }
