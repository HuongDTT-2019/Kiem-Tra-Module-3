import {Injectable} from '@angular/core';
import {Book} from './book';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000';
  books: Book[] = [];
  onNewBook = new Subject<any>();
  constructor(private httpClient: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API_URL + '/books');
  }

  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(this.API_URL + '/books/' + id);
  }

  createBook(book: Book): Observable<any> {
    return this.httpClient.post(this.API_URL + '/books', book);
  }

  deleteBook(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + '/books/' + id);
  }

  updateBook(book: Book): Observable<any> {
    return this.httpClient.put(this.API_URL + '/books/' + book.id, book);
  }
}
