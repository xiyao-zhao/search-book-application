import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../book.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
