import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/services', title: 'Services', icon: 'nc-bulb-63', class: '' },
  { path: '/states', title: 'States', icon: 'nc-check-2', class: '' },
  { path: '/coins', title: 'Coins', icon: 'nc-money-coins', class: '' },
  { path: '/users', title: 'Users', icon: 'nc-single-02', class: '' },
  { path: '/bills', title: 'Billing', icon: 'nc-bank', class: '' },

];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
