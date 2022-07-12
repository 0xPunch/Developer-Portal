import { Component, OnInit } from '@angular/core';
import { asideRoutes } from 'src/app/constants/routes';
import { IRoute } from 'src/app/models/route';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  public routes: IRoute[] = asideRoutes;

  constructor() {}

  ngOnInit() {}
}
