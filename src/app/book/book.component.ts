import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  listBook: Book[] = [];
  countBook: number;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getBookList();
    this.bookService.onNewBook.subscribe((time) => {
      console.log('list books');
      this.getBookList();
      this.countBook = this.listBook.length;
    });
  }

  getBookList() {
    this.bookService.getBooks().subscribe(newList => this.listBook = newList);
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      alert('xoa thanh cong');
      this.getBookList();
    }, error => {
      console.log('error');
    });
  }

}
