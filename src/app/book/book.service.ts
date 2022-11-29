import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './book-data';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks() {
    return BOOKS;
  }

  constructor() { }
}
