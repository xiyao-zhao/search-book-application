import { Component, Input, OnInit} from '@angular/core';
import { Book } from 'src/app/book.interface';
import { BookService, Wishlist } from 'src/app/service/book.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})

export class CardComponent implements OnInit {
    @Input() book: Book;

    collapse = true;
    wishlists$: Observable<Wishlist[]>; 

    constructor(private bookService: BookService) {}

    ngOnInit(): void { 
        this.wishlists$ = this.bookService.wishlists$;
    }

    handleLongString() {
        this.collapse = !this.collapse;
    }

    clickCard() {
        this.bookService.addToWishlist({
            bookname: this.book.title
        });
    }
}