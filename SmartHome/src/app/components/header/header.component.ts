import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataStoreService } from 'src/app/services/data-store.service';
import { AppUtils } from 'src/app/utils/app-utils';
import { RoutingConstants } from 'src/app/utils/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isHomePage: boolean = false;
  @Input() pageName: string = "";
  public userName: string = "";

  constructor(
    private router: Router,
    private _authService: AuthService,
    private _dataStoreService: DataStoreService
  ) { }

  ngOnInit(): void {
    if (!AppUtils.isNullOrUndefined(this._dataStoreService.loggedUser)) {
      this.userName = this._dataStoreService.loggedUser.toUpperCase();
    }
  }

  public goToHomePage(): void {
    this.router.navigate([RoutingConstants.HomePage])
  }

  public onLogOutClick(): void {
    this._authService.logout();
  }

}
