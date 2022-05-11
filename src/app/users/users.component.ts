import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../placeholder.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users: any = [];

  constructor(private _apiService: PlaceholderService) {}

  ngOnInit(): void {
    this._apiService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
