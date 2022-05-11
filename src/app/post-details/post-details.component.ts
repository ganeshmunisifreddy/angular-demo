import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../placeholder.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  public post: any = {};
  public isLoading: boolean = false;
  public currentId: number = 1;

  constructor(
    private _api: PlaceholderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // let id: any = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    //this.currentId = parseInt(id);
    this.route.params.subscribe((res: any) => {
      console.log(res);
      this.currentId = parseInt(res.id);
      this.isLoading = true;
      this._api.getPost(this.currentId).subscribe((res) => {
        this.post = res;
        this.isLoading = false;
      });
    });
  }

  handleNav(nav: string) {
    if (nav === 'prev') {
      this.currentId = this.currentId - 1;
      this.router.navigate(['posts', this.currentId]);
    } else {
      this.currentId = this.currentId + 1;
      this.router.navigate(['posts', this.currentId]);
    }
  }
}
