import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: string): string {
    return value?.length > 20 ? `${value.substr(0, 25)}...` : value;
  }

}
