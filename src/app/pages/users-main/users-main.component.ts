import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
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
  searchItems: string[] = [];
  loaded = false;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    const items = localStorage.getItem('items');
    this.searchItems = JSON.parse(items) || [];
  }

  ngOnInit(): void {
    this.getfullUsers();

    this.searchForm = this.fb.group({
      userName: [null],
    });
  }

  search(userName): void {
    this.usersService.getUser(userName).subscribe(
      (res) => this.router.navigate([`/${res.login}`]),
      (err) => {
        window.alert('user not found, Please try again');
      }
    );
    this.saveSearch(userName);
  }

  saveSearch(item): void{
    if (this.searchItems.length >= 3) {
      {
        this.searchItems.reverse().pop();
        this.searchItems.reverse();
      }
    }
    this.searchItems.push(item);
    localStorage.setItem('items', JSON.stringify(this.searchItems));
  }

  getfullUsers(): void{
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
      .subscribe((res) => {
        this.loaded = true;
        this.users = Object.keys(res).map((key) => {
          return res[key];
        });
      });
  }
  getUsers(): Observable<any>{
    return this.usersService.getUsers();
  }

  getRepos(userName): Observable<any> {
    return this.usersService.getUserRepos(userName);
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView();
  }
}
