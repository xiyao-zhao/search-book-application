import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { DataService } from './data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooklistComponent } from './booklist/booklist.component';
import { CardComponent } from './booklist/card/card.component';
import { ShortenStringPipe } from './shorten-string.pipe';
import { WishlistComponent } from './wishlist/wishlist.component';


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
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
