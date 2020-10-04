import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorage, StorageMap } from '@ngx-pwa/local-storage';
import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { IUser } from 'src/app/models/IUser';
import { SearchService } from 'src/app/services/search.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-main',
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.scss'],
})
export class UsersMainComponent implements OnInit, OnChanges {
  searchForm: FormGroup;
  users: IUser[];
  searchItems: string[];
  loaded = false;

  _subscription_user_name;
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private storage: StorageMap,
    private searchService: SearchService
  ) {
    this._subscription_user_name = this.searchService.searchitems.subscribe(
      (value) => {
        this.searchItems = value;
        console.log(`this is value ${value}`);
      }
    );
  }

  ngOnChanges() {
    console.log(this.users);
    this.loaded = this.users.length > 0;
    console.log(this.loaded);
  }

  ngOnInit(): void {
    this.getfullUsers();

    this.searchForm = this.fb.group({
      userName: [null],
    });
    // this.storage.clear().subscribe(() => {});

    // this.storage
    //   .get('items'
    //   , {
    //     type: 'array',
    //     items: { type: 'string' }
    //    })
    //   .subscribe((items) => {
    //     console.log(items)
    //      this.searchItems = items ? items : [];
    //   });
  }

  search(userName) {
    this.usersService.getUser(userName).subscribe(
      (res) => this.router.navigate([`/${res.login}`]),
      (err) => {
        // window.alert('user not found');
      }
    );
    this.saveSearch(userName);
  }

  saveSearch(item) {
    // this.searchItems.push(item);
    this.searchService.saveItem(item);
    // this.searchItems.push(item);
    // this.searchItems.reverse();
    // console.log(this.searchItems)
    // if (this.searchItems.length > 3) {
    //   this.searchItems.pop();
    //   console.log(this.searchItems)
    // }
    // this.storage.set('items', this.searchItems).subscribe()
    // this.storage.get('items').subscribe(item => console.log(`storage ${item}`))
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
      .subscribe((res) => {
        this.loaded = true;
        this.users = Object.keys(res).map((key) => {
          return res[key];
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
