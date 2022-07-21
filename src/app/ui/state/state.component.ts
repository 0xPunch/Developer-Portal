import { DemoService } from 'src/app/services/demo.service';
import { UiService } from 'src/app/services/ui.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent implements OnInit {
  constructor(public ui: UiService, public demo: DemoService) {}

  public interval: any;
  public updateState = ($event: any, key: string) => {
    if (!this.interval) {
      this.interval = setTimeout(() => {
        this.demo.updateState({
          [key]: $event.data,
        });
      }, 1000);
    }

    clearInterval(this.interval);
  };

  ngOnInit() {}
}
