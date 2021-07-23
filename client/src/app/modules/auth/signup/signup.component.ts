import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  signupHandler() {
    const { login, password } = this.authForm.value;
    this.userService.signup({ login, password })
      .subscribe((res) => console.log('res', res));
  }

  switchPasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
