import { Logout } from './../../store/actions/user.actions';
import { UserService } from './../../services/user.service';
import { Component, Directive, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { Collapse } from 'bootstrap';
import { User } from 'src/app/interfaces';
import { State } from 'src/app/store/reducers';
import { getUser } from 'src/app/store/reducers/user.reducer';


@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    @ViewChild('navbarToggler') menuToggleRef: ElementRef;
    bsCollapse: any;
    user: User;

    constructor(
        private store: Store<State>,
        private userService: UserService,
    ) { }

    ngOnInit(): void {
        this.store.select(getUser)
            .subscribe((user) => this.user = user);
    }

    toggle() {
        console.log('toggle');
        this.bsCollapse.toggle();
    }

    ngAfterViewInit() {
        this.bsCollapse = new Collapse(this.menuToggleRef.nativeElement, {toggle: false});
    }

    logout() {
        this.store.dispatch(new Logout());
    }
}
