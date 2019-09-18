import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Book} from '../book';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {
  }

  ngOnInit() {
    this.getBookById();
  }

  getBookById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(book => this.book = book
    );
  }

  editBook() {
    if (this.book) {
      this.bookService.updateBook(this.book).subscribe(() => {
        this.bookService.getBooks();
        alert('da cap nhat');
      });
    }
  }

}
