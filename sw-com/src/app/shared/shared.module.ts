import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfComponent } from './mf/mf.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { ImageUrlValidatorDirective } from './image-url-validator.directive';
import { ShortenTextPipe } from './shorten-text.pipe';
import { NumberValidatorDirective } from './number-validator.directive';


@NgModule({
  declarations: [
    MfComponent,
    EmailValidatorDirective,
    ImageUrlValidatorDirective,
    ShortenTextPipe,
    NumberValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MfComponent,
    EmailValidatorDirective,
    ImageUrlValidatorDirective,
    ShortenTextPipe,
    NumberValidatorDirective
  ]
})
export class SharedModule { }
