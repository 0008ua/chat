import { UserService } from './services/user.service';
import { LoadUser } from './store/actions/user.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/reducers';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
    constructor(
        private store: Store<State>,
        private userService: UserService,
    ) { }

    ngOnInit() {
        this.store.dispatch(new LoadUser());
    }
}
