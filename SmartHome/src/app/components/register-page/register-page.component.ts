import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterUserModel } from 'src/app/models/user-models';
import { AuthService } from 'src/app/services/auth.service';
import { AppUtils } from 'src/app/utils/app-utils';
import { Role, RoutingConstants } from 'src/app/utils/enums';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public form: FormGroup;
  public loginInvalid = false;
  public roles: Role[];
  public selectedRole: Role
  public errorMessage: string = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  public ngOnInit(): void {
    this.roles = [];
    this.roles.push(Role.ADULT);
    this.roles.push(Role.CHILD);
  }

  private openSnackBar() {
    this._snackBar.open('User created successfully', '', {
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }

  public redirectToLogin(): void {
    this.router.navigate([RoutingConstants.Login]);
  }

  public async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.errorMessage = "";
    if (this.form.valid) {
      const username = this.form.get('username')?.value;
      const password = this.form.get('password')?.value;
      const confirmPassword = this.form.get('confirmPassword')?.value;

      if (!AppUtils.isNullOrUndefined(username) && !AppUtils.isNullOrUndefined(password) && !AppUtils.isNullOrUndefined(confirmPassword)) {
        if (password !== confirmPassword) {
          this.errorMessage = "Password must be the same."
          this.loginInvalid = true;
          return;
        }
        if (AppUtils.isNullOrUndefined(this.selectedRole)) {
          this.errorMessage = "Please select an user role."
          this.loginInvalid = true;
          return;
        }
        let user = <RegisterUserModel>{
          username: username,
          password: password,
          role: this.selectedRole
        };
        let loginResponse = await this.authService.register(user);
        if (loginResponse.success) {
          this.openSnackBar();
          setTimeout(() => {
            this.router.navigate([RoutingConstants.Login]);
          }, 1200);
        } else {
          this.errorMessage = loginResponse.error;
          this.loginInvalid = true;
          return;
        }
      } else {
        this.loginInvalid = true;
      }
    }
  }
}
