import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUtils } from 'src/app/utils/app-utils';
import { RoutingConstants } from 'src/app/utils/enums';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public redirectToPages(pageIndex: number): void {
    if (!AppUtils.isNullOrUndefined(pageIndex)) {
      if (pageIndex === 0) {
        this.router.navigate([RoutingConstants.Thermostat]);
      }
      if (pageIndex === 1) {
        this.router.navigate([RoutingConstants.LightingControl]);
      }
      if (pageIndex === 2) {
        this.router.navigate([RoutingConstants.GroceriesDatabase]);
      }
      if (pageIndex === 3) {
        this.router.navigate([RoutingConstants.ScreenTime]);
      }
      if (pageIndex === 4) {
        this.router.navigate([RoutingConstants.MedicineTimer]);
      }
      if (pageIndex === 5) {
        this.router.navigate([RoutingConstants.SecurityControl]);
      }
      if (pageIndex === 6) {
        this.router.navigate([RoutingConstants.VacuumCleaner]);
      }
      if (pageIndex === 7) {
        this.router.navigate([RoutingConstants.Music]);
      }
      if (pageIndex === 8) {
        this.router.navigate([RoutingConstants.FlowerWatering]);
      }
    }
  }

}
