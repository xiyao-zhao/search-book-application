import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { BooklistComponent } from './booklist/booklist.component';
import { CardComponent } from './booklist/card/card.component';
import { WishlistComponent } from './wishlist/wishlist.component';

import { DataService } from './service/data.service';
import { BookService } from './service/book.service';

import { ShortenStringPipe } from './shorten-string.pipe';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    BooklistComponent,
    CardComponent,
    ShortenStringPipe,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [DataService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
