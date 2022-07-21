import { DemoService } from 'src/app/services/demo.service';
import { ApplicationService } from 'src/app/services/applications.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmulator } from 'src/app/models/emulator';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ConsoleEventTypes, IConsoleEvent } from 'src/app/models/console';
import { v4 as uuidv4 } from 'uuid';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public authPhone = null;
  public phoneError = '';
  public waiting = false;
  public showRestart = false;
  public authorized = false;
  public error$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  @Input() config: IEmulator | undefined;
  @Output('consoleEvent') consoleEvent: EventEmitter<IConsoleEvent> =
    new EventEmitter<IConsoleEvent>();

  constructor(
    public http: HttpClient,
    public appService: ApplicationService,
    public demo: DemoService
  ) {}

  public handleAuthError = (error: HttpErrorResponse) => {
    return throwError(() => {
      this.showRestart = true;
      const authFailed: IConsoleEvent = {
        message: 'Auth failed',
        type: ConsoleEventTypes.error,
        id: uuidv4(),
        data: error,
      };
      this.waiting = false;
      this.consoleEvent.emit(authFailed);
      this.error$.next('Could not authorize: ' + error.error.error);
    });
  };

  public authorizing = () => {
    const endpoint = this.config?.config?.ApiEndpoints?.['auth'];
    const host = this.config?.config?.ApiHost;
    const full = `${host}${endpoint}`;
    this.waiting = true;
    const authorizingEvent: IConsoleEvent = {
      message: 'Authorizing ...',
      type: ConsoleEventTypes.apiCall,
      id: uuidv4(),
      data: {
        url: full,
        phoneNumber: this.authPhone,
      },
    };

    this.consoleEvent.emit(authorizingEvent);
    const app = this.appService.applicationBehavior$.value;
    const { client_id, client_secret } = app;
    this.http
      .post(
        full,
        {
          phoneNumber: this.authPhone,
        },
        {
          headers: {
            client_id,
            client_secret,
          },
        }
      )
      .pipe(catchError(this.handleAuthError))
      .subscribe((data: any) => {
        this.authorized = true;
        this.waiting = false;
        const authorizingDone: IConsoleEvent = {
          message: 'Authorizing complete',
          type: ConsoleEventTypes.success,
          id: uuidv4(),
          data,
        };
        this.consoleEvent.emit(authorizingDone);
        this.demo.updateState({ authToken: data?.token });
      });
  };

  public restart = ($event: Event) => {
    $event.preventDefault();
    this.authorized = false;
    this.showRestart = false;
    this.error$.next(null);
    const restart: IConsoleEvent = {
      message: 'Restarting',
      type: ConsoleEventTypes.restart,
      id: uuidv4(),
    };

    this.consoleEvent.emit(restart);
  };

  public handleClick = ($event: Event) => {
    $event.preventDefault();
    this.phoneError = '';
    if (this.authPhone) {
      this.authorizing();
    } else {
      this.phoneError = 'Missing phone number';
    }
  };

  ngOnInit() {
    const initEvent: IConsoleEvent = {
      message: 'Auth demo just started',
      type: ConsoleEventTypes.init,
      id: uuidv4(),
    };

    this.consoleEvent.emit(initEvent);
  }
}
