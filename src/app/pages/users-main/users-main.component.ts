import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { IUser } from 'src/app/models/IUser';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-main',
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.scss'],
})
export class UsersMainComponent implements OnInit {
  searchForm: FormGroup;
  users: IUser[];

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getfullUsers();
    this.searchForm = this.fb.group({
      userName: [null],
    });
  }

  search(userName) {
    this.usersService.getUser(userName).subscribe(
      (res) => this.router.navigate([`/${res.login}`]),
      (err) => {
        window.alert('user not found');
      }
    );
  }

  getfullUsers() {
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
          return forkJoin(users$);
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

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
