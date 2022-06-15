import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'object'
})
export class ObjectPipe implements PipeTransform {

    transform(value: any, key: string): any {
        if (value.hasOwnProperty(key)) {
            return value[key];
        } else {
            return 'key does not exist';
        }
    }

}
