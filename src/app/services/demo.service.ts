import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError, Subscription, BehaviorSubject } from 'rxjs';
import { ApiEndpoints, ApiHost } from '../constants/api';
import { currencies, walletBalance } from '../constants/demo';

export enum DemoRequestMethods {
  POST = 'post',
  GET = 'get',
  PATCH = 'patch',
}

export interface DemoRequest {
  method: DemoRequestMethods;
  endpoint: string;
  headers?: any;
  data?: any;
}

@Injectable({
  providedIn: 'root',
})
export class DemoService implements OnDestroy {
  private banksSub$: Subscription | undefined;
  private banksBehavior$: BehaviorSubject<any> | undefined;

  public currency = currencies[0];
  public currencies = currencies;
  public balance = walletBalance;

  public setCurrency = (idx: number) => {
    this.currency = this.currencies[idx];
  };
  public setBalance = (amount: number) => {
    this.balance = amount;
  };

  public handleError = (error: HttpErrorResponse) => {
    return throwError(() => {
      console.error(error);
    });
  };

  public request = (config: DemoRequest) => {
    switch (config.method) {
      case DemoRequestMethods.GET:
        return this.http.get(config.endpoint, { headers: config.headers });
      case DemoRequestMethods.POST:
        return this.http.post(config.endpoint, config.data, {
          headers: config.headers,
        });
      case DemoRequestMethods.PATCH:
        return this.http.patch(config.endpoint, config.data, {
          headers: config.headers,
        });
    }
  };

  public getBanks = () => {
    return this.http.get(`${ApiHost}${ApiEndpoints.wallet}/0/wallet/1/banks`);
  };

  ngOnDestroy() {
    if (this.banksSub$) {
      this.banksSub$.unsubscribe();
    }
  }

  constructor(public http: HttpClient, public router: Router) {}
}
