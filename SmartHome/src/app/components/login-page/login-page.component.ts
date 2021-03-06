import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-models';
import { AuthService } from 'src/app/services/auth.service';
import { AppUtils } from 'src/app/utils/app-utils';
import { RoutingConstants } from 'src/app/utils/enums';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  public loginInvalid = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public ngOnInit(): void {
  }

  public redirectToRegister(): void {
    this.router.navigate([RoutingConstants.Register]);
  }


  public onSubmit(): void {
    this.loginInvalid = false;
    if (this.form.valid) {
      const username = this.form.get('username')?.value;
      const password = this.form.get('password')?.value;
      if (!AppUtils.isNullOrUndefined(username) && !AppUtils.isNullOrUndefined(password)) {
        let user = <UserModel>{
          username: username,
          password: password
        };
        let loginResponse = this.authService.login(user);
        if (loginResponse.success) {
          this.router.navigate([RoutingConstants.HomePage]);
        } else {
          this.loginInvalid = true;
        }
      } else {
        this.loginInvalid = true;
      }
    }
  }
}
