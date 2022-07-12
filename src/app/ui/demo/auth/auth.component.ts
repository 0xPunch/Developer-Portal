import { HttpClient } from '@angular/common/http';
import { IEmulator } from 'src/app/models/emulator';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ConsoleEventTypes, IConsoleEvent } from 'src/app/models/console';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public authPhone = null;
  public phoneError = '';
  public waiting = false;
  public authorized = false;
  @Input() config: IEmulator | undefined;
  @Output('consoleEvent') consoleEvent: EventEmitter<IConsoleEvent> =
    new EventEmitter<IConsoleEvent>();

  constructor(public http: HttpClient) {}

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

    this.http
      .post(full, {
        phoneNumber: this.authPhone,
      })
      .subscribe((data) => {
        this.authorized = true;
        this.waiting = false;
        const authorizingDone: IConsoleEvent = {
          message: 'Authorizing complete',
          type: ConsoleEventTypes.success,
          id: uuidv4(),
          data,
        };
        this.consoleEvent.emit(authorizingDone);
      });
  };

  public restart = ($event: Event) => {
    $event.preventDefault();
    this.authorized = false;
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
