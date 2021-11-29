import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/book.interface';
import { ShortenStringPipe } from 'src/app/shorten-string.pipe';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
    @Input() book: Book;

    collapse = true;

    handleLongString() {
        this.collapse = !this.collapse;
    }

    constructor() { }

    ngOnInit(): void { }
}
