import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../book.interface';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-booklist',
    templateUrl: './booklist.component.html',
    styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
    books: Book[];
    wishlist: string[];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.books$.subscribe(data => {
            this.books = data;
            console.log(this.books)
        });

    }

    addToWishlist(e: any) {
        this.wishlist.push(e);
    }
 
}
