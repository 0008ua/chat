import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
    {
        path: 'signin',
        component: SigninComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    // {
    //   path: '**',
    //   redirectTo: '',
    //   pathMatch: 'full',
    // },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule { }
