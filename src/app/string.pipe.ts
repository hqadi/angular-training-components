import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform {

  transform(value: string, operation?: 'lowercase' | 'uppercase'): string {
    return value;
  }

}
