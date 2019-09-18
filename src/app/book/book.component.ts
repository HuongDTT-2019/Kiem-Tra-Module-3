import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  listBook: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(next => this.listBook = next, error => {
      this.listBook = [];
    });
  }
  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      alert('xoa thanh cong');
      this.bookService.getBooks();
    }, error => {
      console.log('error');
    });
  }

}
