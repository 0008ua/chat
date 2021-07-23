import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  authForm: FormGroup;

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
    })
  }

  loginHandler() {
    this.userService.login(this.authForm.value)
      .subscribe((res) => console.log('res', res));
  }
}
