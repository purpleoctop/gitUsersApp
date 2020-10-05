import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { IUser } from 'src/app/models/IUser';
import { IUserDetails } from 'src/app/models/IUserDetails';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss'],
})
export class UserMainComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}
  userName: string;
  fullUser$;
  fullUser;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => (this.userName = params.get('user'))
    );
    this.getfullUser(this.userName).subscribe((user) => {
      this.fullUser = user;
    });
  }

  getUser(userName): Observable<IUserDetails> {
    return this.usersService.getUser(userName);
  }

  getRepos(userName): Observable<any> {
    return this.usersService.getUserRepos(userName);
  }

  getOrgs(userName): Observable<any>  {
    return this.usersService.getOrgs(userName);
  }

  getfullUser(userName): Observable<any>  {
    this.fullUser$ = forkJoin({
      info: this.getUser(userName),
      repos: this.getRepos(userName).pipe(map((repos) => repos.slice(0, 3))),
      orgs: this.getOrgs(userName),
    });

    return this.fullUser$;
  }
}
