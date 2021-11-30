import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortenString',
})
export class ShortenStringPipe implements PipeTransform {
     transform(value: string, collapse: boolean) {
        if (value.length > 440) {
            if (collapse === true) {
                return value.slice(0, 440) + ' ...Read More';
            } else return value;
        }
        return;
    }
}