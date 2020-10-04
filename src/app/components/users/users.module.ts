import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from '../users/users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, MatIconModule],
})
export class UsersModule {}
