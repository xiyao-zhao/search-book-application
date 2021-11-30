import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/book.interface';
import { ShortenStringPipe } from 'src/app/shorten-string.pipe';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
    @Input() book: Book;
    @Output() clicked = new EventEmitter();

    collapse = true;

    handleLongString() {
        this.collapse = !this.collapse;
    }

    getTitle() {
        console.log(this.book.title);
        this.clicked.emit(this.book.title);
    }

    constructor() { }

    ngOnInit(): void { }
}
