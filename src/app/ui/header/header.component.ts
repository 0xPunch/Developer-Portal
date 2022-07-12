import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService as AngularAuthService } from '@auth0/auth0-angular';
import { UiService, Theme } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public showUserNav = false;
  public theme = Theme;
  public canGoBack = () => {
    return (
      window.location.pathname.startsWith('/applications') &&
      !window.location.pathname.endsWith('/applications')
    );
  };

  public getUser$ = () => {
    return this.angularAuth.user$;
  };

  public goBack = () => {
    //window.history.back();
    this.router.navigate(['applications']);
  };

  public toggleUserNav = () => {
    this.showUserNav = !this.showUserNav;
  };

  public logOut = () => {
    this.angularAuth.logout();
  };

  public toggleTheme = () => {
    const theme = this.ui.getTheme();
    if (theme === Theme.dark) {
      this.ui.toggleTheme(Theme.light);
    }
    if (theme === Theme.light) {
      this.ui.toggleTheme(Theme.dark);
    }
  };

  constructor(
    public angularAuth: AngularAuthService,
    public router: Router,
    public ui: UiService
  ) {}

  ngOnInit() {}
}
