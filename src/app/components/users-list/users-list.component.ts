import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UsersService } from 'src/app/services/users.service';
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() users: IUser[];
  mode = 'list';
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    
  }

  
  changeView(mode) {
    this.mode = mode;
  }
 
}
