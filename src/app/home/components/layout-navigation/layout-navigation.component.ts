import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-navigation',
  templateUrl: './layout-navigation.component.html',
  styleUrls: ['./layout-navigation.component.scss']
})
export class LayoutNavigationComponent implements OnInit {
  public navigationisOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

  public toggleNavigation() {
    this.navigationisOpen = !this.navigationisOpen;
  }
}
