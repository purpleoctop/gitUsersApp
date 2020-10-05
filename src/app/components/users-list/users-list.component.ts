import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() users: IUser[];
  mode = '__list';
  constructor() {}

  ngOnInit(): void {}

  changeView(mode): void {
    this.mode = mode;
  }
}
