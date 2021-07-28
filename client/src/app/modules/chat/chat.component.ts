import { State } from './../../store/reducers/index';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logout } from 'src/app/store/actions/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
