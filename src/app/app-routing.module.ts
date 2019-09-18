import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddComponent} from './add/add.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookComponent} from './book/book.component';


const routes: Routes = [{
  path: 'books', component: AddComponent
}, {
  path: 'books/edit/:id', component: BookEditComponent
}, {
  path: 'books/detail/:id', component: BookDetailComponent
}, {
  path: 'books/list', component: BookComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
