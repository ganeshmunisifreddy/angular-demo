import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../placeholder.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos: any = [];

  constructor(private _apiService: PlaceholderService) {}

  ngOnInit(): void {
    this._apiService.getTodos().subscribe((res) => {
      this.todos = res;
    });
  }
}
