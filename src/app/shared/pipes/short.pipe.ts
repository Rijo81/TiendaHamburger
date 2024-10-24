import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
  standalone: true
})
export class ShortPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log('transform', value);
    let maxLength =+ args[0];
    if (value.length > maxLength) {
      return value.slice(0, maxLength);
    }
    return value;
  }

}
