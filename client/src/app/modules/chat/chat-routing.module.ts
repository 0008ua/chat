import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ChatComponent,
    },
    // {
    //   path: '**',
    //   redirectTo: '',
    //   pathMatch: 'full',
    // },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
    ],
    exports: [RouterModule],
})
export class ChatRoutingModule { }
