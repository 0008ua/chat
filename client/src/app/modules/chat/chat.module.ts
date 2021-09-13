import { ChatRoutingModule } from './chat-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatCompactComponent } from './chat-compact/chat-compact.component';


@NgModule({
    declarations: [
        ChatComponent,
        // ChatCompactComponent,
    ],
    imports: [
        CommonModule,
        ChatRoutingModule,
    ],
    exports: [
        // ChatCompactComponent,
    ],
})

export class ChatModule { }
