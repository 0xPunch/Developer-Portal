import { DemoService } from 'src/app/services/demo.service';
import { ConsoleEventTypes, IConsoleEvent } from 'src/app/models/console';
import { IEmulator } from './../../models/emulator';
import { BehaviorSubject } from 'rxjs';
import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IDemo } from 'src/app/models/demo';

@Component({
  selector: 'app-emulator',
  templateUrl: './emulator.component.html',
  styleUrls: ['./emulator.component.scss'],
})
export class EmulatorComponent implements OnInit {
  @Input() config: IEmulator = {
    name: '',
    toggleApi: true,
    segment: undefined,
  };

  @ViewChild('calls') public calls: ElementRef;

  public eventsExpanded: { [key: string]: boolean } = {};
  public eventTypes = ConsoleEventTypes;
  public demo: IDemo = { name: undefined };
  public consoleEvents: IConsoleEvent[] = [];
  public activeConsoleTab = 'calls';

  public showApiCalls$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public showApiConsole$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public handleConsoleEvents = (event: IConsoleEvent) => {
    if (event.type === ConsoleEventTypes.restart) {
      this.consoleEvents.length = 0;
      return;
    }
    setTimeout(() => {
      this.consoleEvents.push({ ...event, time: new Date() });
    });
    setTimeout(() => this.scrollCalls(), 100);
  };

  public scrollCalls = () => {
    if (this.calls && this.calls.nativeElement) {
      const height = this.calls.nativeElement.scrollHeight;
      this.calls.nativeElement.scroll({
        top: height,
        left: 0,
        behavior: 'instant',
      });
    }
  };

  public toggleApiCalls = () => {
    if (this.config.segment) {
      if (localStorage.getItem(this.config.segment)) {
        localStorage.removeItem(this.config.segment);
      } else {
        localStorage.setItem(this.config.segment, 'true');
      }
    }
    this.showApiConsole$.next(!this.showApiConsole$.value);
  };

  constructor(public demoService: DemoService) {}

  ngOnInit() {
    if (this.config.segment) {
      this.demo = { name: this.config.segment };
      const showApiConsole = localStorage.getItem(this.config.segment);
      if (showApiConsole) {
        this.showApiConsole$.next(true);
      }
    }
  }
}
