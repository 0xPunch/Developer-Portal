import { Component, OnInit } from '@angular/core';
import { AuthService as AngularAuthService } from '@auth0/auth0-angular';
import { GetProvider } from 'src/app/constants/auth';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  public getUser$ = () => {
    return this.angularAuth.user$;
  };

  public getProvider = GetProvider;

  constructor(public angularAuth: AngularAuthService) {}

  ngOnInit() {}
}
