import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaceholderService } from '../placeholder.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  public posts: any = [];

  @Input() public myName: string = '';

  @Output() public childEvent = new EventEmitter();

  constructor(private _apiService: PlaceholderService) {}

  onEventEmit = () => {
    this.childEvent.emit('Hello!');
  };

  ngOnInit(): void {
    this._apiService.getPosts().subscribe(
      (res) => {
        this.posts = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
