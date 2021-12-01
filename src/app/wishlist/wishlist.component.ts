import { Component, OnInit } from '@angular/core';
import { BookService, Wishlist } from 'src/app/service/book.service';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit {
    wishlists: Wishlist[];

    constructor(private bookService: BookService) { }

    ngOnInit(): void {
        this.bookService.wishlists$.subscribe(list => {
            this.wishlists = list;
        })
    }

    removeList(e: any) {
        console.log(e.target.value);
        this.bookService.removeItem(e.target.value);
    }
}
