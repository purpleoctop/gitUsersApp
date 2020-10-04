import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser, IUserResponse, } from '../models/IUser';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiUrl = 'https://api.github.com/users';
  constructor(private http: HttpClient) {}

  getUsers() {
    const requestUrl = this.apiUrl;
    return this.http.get<Array<IUserResponse>>(requestUrl).pipe(
      map((users: IUserResponse[]) => {
        const userTransformed = users.map((user: IUserResponse) => {
          const { login, avatar_url, type } = user;
          const transformed = {
            userName: login,
            avatar_Url: avatar_url,
            type: type,
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

  getUserRepos(userName): Observable<any> {
    const requestUrl = this.apiUrl+`/${userName}/repos`;
    return this.http.get<any>(requestUrl);
  }
}
