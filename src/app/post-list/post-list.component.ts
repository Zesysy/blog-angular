import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts = [
    {
      title: 'My first article',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci elit, imperdiet quis vulputate non, semper at tellus. Curabitur facilisis egestas egestas. Etiam in lacus mauris. Cras imperdiet quam nec gravida ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pellentesque, lacus non dictum egestas, felis sapien iaculis nibh, sit amet tempor mi risus a urna. Donec a egestas erat, quis consequat tellus. Etiam sed risus eu dolor mollis sagittis at eu justo. Maecenas ut neque quis magna tincidunt porttitor a vel dolor. Ut non magna vel sapien vulputate porttitor. Suspendisse elementum odio nec enim porttitor, ac vestibulum risus iaculis. Etiam tempus pulvinar pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Integer ut vehicula nunc, at rutrum odio.',
      loveIts: 3,
      created_at: '2020-08-20',
    },
    {
      title: 'My second article',
      content:
        'Aliquam at lorem quis arcu efficitur maximus vel quis nunc. Integer turpis nisi, dictum sit amet fermentum sit amet, convallis ut eros. Vestibulum justo felis, luctus vel felis at, varius ultricies lorem. Vestibulum at mi enim. Ut rhoncus hendrerit elit vel vestibulum. Vivamus suscipit leo at metus posuere fringilla. Phasellus finibus urna a nibh eleifend, eu euismod nunc pulvinar. Nullam maximus sed enim nec interdum. Ut vel dolor quam. Nullam aliquam eros libero, sed bibendum turpis hendrerit ut.',
      loveIts: -13,
      created_at: '2020-08-20',
    },
    {
      title: 'Other article',
      content:
        'Praesent pellentesque ullamcorper orci, quis ullamcorper mauris molestie ac. Nunc sit amet nunc et nulla rutrum mattis eu eget eros. Donec erat neque, tincidunt vel malesuada et, placerat et ipsum. Quisque interdum massa odio, vel porta lectus sollicitudin id. In scelerisque, arcu quis elementum aliquet, tortor risus efficitur libero, eu suscipit nulla nunc ac dui. Ut iaculis pulvinar nulla. Curabitur consectetur faucibus diam ac luctus.',
      loveIts: 10,
      created_at: '2020-08-20',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
