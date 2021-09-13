import { NavModule } from './modules/nav/nav.module';
import { CookieService } from 'ngx-cookie-service';
import { SocketIoModule, SocketIoConfig, Socket } from 'ngx-socket-io';
import { AppStoreModule } from './store/store.module';
import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';


const config: SocketIoConfig = { url: '/', options: { autoConnect: false } };

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        AppStoreModule,
        HttpClientModule,
        SocketIoModule.forRoot(config),
    ],
    providers: [
        CookieService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
        // { provide: Socket, useFactory: nspSocketServiceFactory },
        // { provide: NSP_GUEST, useValue: environment.nsp.guest },
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
