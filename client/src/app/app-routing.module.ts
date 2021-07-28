import { AuthGuard } from './services/auth.guard';
import { NoAuthGuard } from './services/no-auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NoAuthGuard],
  },
  {
    path: '',
    loadChildren: () => import('./modules/chat/chat.module').then((m) => m.ChatModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
