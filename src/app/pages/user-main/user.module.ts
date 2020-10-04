import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from '../../components/user-details/user-details.component';
import { UserMainComponent } from './user-main.component';

@NgModule({
  declarations: [UserDetailsComponent, UserMainComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
