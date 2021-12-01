import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Book } from '../book.interface';
@Component({
    selector: 'app-booklist',
    templateUrl: './booklist.component.html',
    styleUrls: ['./booklist.component.css']
})

export class BooklistComponent implements OnInit {
    books: Book[];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.books$.subscribe(data => {
            this.books = data;
            console.log(this.books)
        });

    }
}
