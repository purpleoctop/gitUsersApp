import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map, take } from 'rxjs/operators';
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
      console.log(this.fullUser);
    });
  }

  getUser(userName) {
    return this.usersService.getUser(userName);
  }

  getRepos(userName) {
    return this.usersService.getUserRepos(userName);
  }

  getOrgs(userName) {
    return this.usersService.getOrgs(userName);
  }

  getfullUser(userName) {
    this.fullUser$ = forkJoin({
      info: this.getUser(userName),
      repos: this.getRepos(userName).pipe(map((repos) => repos.slice(0, 3))),
      orgs: this.getOrgs(userName),
    });

    return this.fullUser$;
  }
}
