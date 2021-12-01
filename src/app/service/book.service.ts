import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Wishlist {
    bookname: string;
}

@Injectable()
export class BookService {
    private _wishlists = new BehaviorSubject<Wishlist[]>([]);
    readonly wishlists$ = this._wishlists.asObservable();

    private wishlists: Wishlist[] = [];

    constructor() { }

    addToWishlist(item: Wishlist) {
        let exist = false;
        this.wishlists.forEach(list => {
            if(list.bookname === item.bookname) {
                exist = true;
            }
        })
       
        if(!exist){
            this.wishlists.push(item);
            this._wishlists.next(Object.assign([], this.wishlists));
        }    
    }

    removeItem(bookname: string) {
        this.wishlists.forEach((item, i) => {
            if(item.bookname === bookname) {
                this.wishlists.splice(i, 1);
            }
            this._wishlists.next(Object.assign([], this.wishlists));
        })
    }
}
