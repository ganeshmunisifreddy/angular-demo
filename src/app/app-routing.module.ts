import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    // redirectTo: '/users',
    // pathMatch: 'full',
  },
  {
    path: 'posts',
    component: TestComponent,
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
