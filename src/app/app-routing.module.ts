import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/users-main/users.module').then((m) => m.UsersModule),
  },
  {
    path: ':user',
    loadChildren: () =>
      import('./pages/user-main/user.module').then((m) => m.UserModule),
  },

  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
