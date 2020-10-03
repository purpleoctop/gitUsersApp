import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser, IUserShort } from '../models/IUser';
import { IUserDetails } from '../models/IUserDetails';
import { map } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiUrl = 'https://api.github.com/users';
  constructor(private http: HttpClient) {}

  getUsers() {
    const requestUrl = this.apiUrl;
    return this.http.get<Array<IUser>>(requestUrl).pipe(
      map((users: IUser[]) => {
        const userTransformed = users.map((user: IUser) => {
          const { login, avatar_url, repos_url, type } = user;
          const transformed = {
            userName: login,
            avatar_Url: avatar_url,
            type: type,
            repos_Url: repos_url,
          };
          return transformed;
        });
        return userTransformed;
      })
    );
  }

  getUser(userName: string) {
    const requestUrl = this.apiUrl + `/${userName}`;
    return this.http.get<IUser>(requestUrl);
  }

  getUserRepos(userName: string): Observable<any> {
    const requestUrl = this.apiUrl + `/${userName}/repos`;
    return this.http.get<any>(requestUrl);
  }
}
