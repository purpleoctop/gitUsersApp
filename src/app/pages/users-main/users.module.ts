import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { UsersMainComponent } from './users-main.component';

@NgModule({
  declarations: [UsersListComponent, UsersMainComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
