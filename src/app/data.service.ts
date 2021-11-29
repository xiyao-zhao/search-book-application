import { Observable, Subject, pluck, map, tap } from "rxjs";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Book } from "./book.interface";

@Injectable()
export class DataService {
    books$ = new Subject<Book[]>();
    baseURL: string = "https://www.googleapis.com/books/v1/volumes?q=";

    constructor(private http: HttpClient) {}

    getAll(bookname: any): Observable<any> {
        return this.http.get(this.baseURL + bookname).pipe(
            pluck("items"),
            map((itemArr: []) => itemArr.map((item: { volumeInfo: { imageLinks: {smallThumbnail: string}; title: string; authors: string[]; publisher: string; publishedDate: string; description: string } }) => ({
                image: item.volumeInfo.imageLinks.smallThumbnail,
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                publisher: item.volumeInfo.publisher,
                publishedDate: item.volumeInfo.publishedDate,
                description: item.volumeInfo.description
            }))),
            tap(myArr => {
                this.books$.next(myArr);
            })
        )
    }

}