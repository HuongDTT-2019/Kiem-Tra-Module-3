import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {BookService} from '../book.service';
import {Book} from '../book';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor( private bookService: BookService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  addBook(form) {
      const {id, title, author, description} = form.value;
      const book = {id, title, author, description};
      this.bookService.createBook(book).subscribe(() => {
          alert('da them thanh cong');
          this.bookService.onNewBook.next(new Date().getTime());
        }, error => {
          console.log('error');
        });
  }

}
