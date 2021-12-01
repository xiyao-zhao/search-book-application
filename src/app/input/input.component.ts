import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { DataService } from '../service/data.service';
import { fromEvent, Observable} from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { Book } from '../book.interface';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
})

export class InputComponent implements OnInit {
 
    @ViewChild('input', {static: true})input: ElementRef;

    inputSubscription: any;
    book$: Observable<Book[]>;

    constructor (private dataService: DataService) {}

    keyUp() {
        this.inputSubscription = fromEvent(this.input.nativeElement, 'keyup').pipe(
            map((event: any) => (<HTMLInputElement>event.target).value),
            debounceTime(1000),
            switchMap(bookname => {
                return this.dataService.getAll(bookname);
            })
            ).subscribe(data => this.book$ = data);
    }

    ngOnInit() {
        this.book$ = this.dataService.books$;
    }

    ngAfterViewInit() {
        this.keyUp();
    }

    ngOnDestroy() {
        this.inputSubscription.unsubscribe();
    }
}
