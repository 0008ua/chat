import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/user.reducer';
import { Login } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  authForm: FormGroup;

  constructor(
    private userService: UserService,
    private store: Store<State>,
  ) { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      login: new FormControl('',
        {
          updateOn: 'change',
          validators: [
            Validators.pattern('^[a-zA-Z0-9_-]+$'),
            Validators.minLength(2),
            Validators.maxLength(50),
            Validators.required,
          ],
        }),
      password: new FormControl('',
        {
          updateOn: 'change',
          validators: [
            Validators.pattern('^[a-zA-Z0-9_-]+$'),
            Validators.minLength(2),
            Validators.maxLength(50),
            Validators.required,
          ],
        }),
    })
  }

  loginHandler() {
    this.store.dispatch(new Login(this.authForm.value));
  }
}
