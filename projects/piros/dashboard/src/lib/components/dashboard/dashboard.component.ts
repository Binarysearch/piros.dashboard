import { Component, OnInit, Input, TemplateRef, ViewEncapsulation } from '@angular/core';

export enum TopbarPosition {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}
export interface DsRoute {
  path: string;
  title: string;
  faIcon?: string;
  topbarPosition?: TopbarPosition;
}

export interface DsConfig {
  routes: DsRoute[];
}

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  @Input() content: TemplateRef<any>;

  leftRoutes: DsRoute[];
  rightRoutes: DsRoute[];

  private _config: DsConfig;

  @Input() set config(config: DsConfig) {
    this._config = config;

    this.leftRoutes = this._config.routes.filter(
      route => route.topbarPosition === TopbarPosition.LEFT
      || !route.topbarPosition
    );

    this.rightRoutes = this._config.routes.filter(
      route => route.topbarPosition === TopbarPosition.RIGHT
    );

  }
  
  constructor() { }

  ngOnInit() {
    
  }

}
