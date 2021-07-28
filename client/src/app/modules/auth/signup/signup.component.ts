import { State } from './../../../store/reducers/index';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Signup } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  authForm: FormGroup;
  showPassword = false;

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
      passwordConfirm: new FormControl('',
        {
          updateOn: 'change',
          validators: [
            Validators.pattern('^[a-zA-Z0-9_-]+$'),
            Validators.minLength(2),
            Validators.maxLength(50),
            Validators.required,
          ],
        }),
    },
      this.userService.matchPassword,
    )
  }

  signup() {
    const { login, password } = this.authForm.value;
    this.store.dispatch(new Signup({ login, password }));
  }

  switchPasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
