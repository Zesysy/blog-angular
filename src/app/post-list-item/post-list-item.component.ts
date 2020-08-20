import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postLove: number;
  @Input() postContent: string;
  @Input() postDate: Date;

  constructor() {}

  ngOnInit(): void {}

  getColor() {
    if (this.postLove >= 0) {
      return 'green';
    } else if (this.postLove < 0) {
      return 'red';
    }
  }

  increment() {
    this.postLove += 1;
  }

  decrement() {
    this.postLove -= 1;
  }
}
