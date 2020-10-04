import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UsersService } from 'src/app/services/users.service';
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers()
      .pipe(
        mergeMap((users) => {
          const users$ = users.map((user) =>
            this.getRepos(user.userName).pipe(
              map((repos) => {
                return { ...user, repos: repos.slice(0, 3) };
              })
            )
          );
          return forkJoin({ ...users$ });
        })
      )
      .subscribe((users) => {
        console.log(users);
        this.users = Object.keys(users).map((key) => {
          return users[key];
        });
      });
  }

  getUsers() {
    return this.usersService.getUsers();
  }

  getRepos(userName) {
    return this.usersService.getUserRepos(userName);
  }
}
