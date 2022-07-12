import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {
  catchError,
  throwError,
  Subscription,
  BehaviorSubject,
  filter,
} from 'rxjs';
import { ApiEndpoints, ApiHost } from '../constants/api';

interface PeyyaWindow extends Window {
  Intercom: any;
}

declare var window: PeyyaWindow;

interface DeveloperResponse {
  developer: any;
  message: string;
  status: number;
}

@Injectable({
  providedIn: 'root',
})
export class DeveloperService implements OnDestroy {
  private developerSub$: Subscription | undefined;
  private developerBehavior$: BehaviorSubject<any> | undefined;

  public createDeveloper = async (name: string = 'Test namn') => {
    try {
      await this.http
        .post(`${ApiHost}${ApiEndpoints.developer}`, { name })
        .subscribe((response) => {
          return response;
        });
    } catch (error) {
      throw error;
    }
  };

  public handleError = (error: HttpErrorResponse) => {
    return throwError(() => {
      console.error(error);
      throw new Error('Developer couldn´t be fetched');
    });
  };

  public getDeveloper = () => {
    if (!this.developerSub$) {
      this.developerSub$ = this.http
        .get(`${ApiHost}${ApiEndpoints.developer}`)
        .pipe(catchError(this.handleError))
        .subscribe((response) => {
          const developer = (response as DeveloperResponse).developer;
          this.developerBehavior$?.next(developer);

          if (window) {
            window.Intercom('boot', {
              api_base: 'https://api-iam.intercom.io',
              app_id: 'ohflijrp',
              name: developer.name, // Full name
              email: developer.email, // Email address
              created_at: '1312182000', // Signup date as a Unix timestamp
            });
          }
        });
    }
  };

  ngOnDestroy() {
    if (this.developerSub$) {
      this.developerSub$.unsubscribe();
    }
  }

  constructor(public http: HttpClient, public router: Router) {
    if (window) {
      router.events
        .pipe(filter((event) => event instanceof NavigationStart))
        .subscribe(() => {
          window.Intercom('update');
        });
    }
  }
}
