import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApplicationService } from './services/applications.service';
import { DeveloperService } from './services/developer.service';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Developer';
  apiOk = true;

  @ViewChild('main') main: ElementRef;

  constructor(
    public developerService: DeveloperService,
    public applicationService: ApplicationService,
    public ui: UiService
  ) {}

  async ngOnInit() {
    try {
      await this.developerService.getDeveloper();
      await this.applicationService.getApplications();
    } catch (error) {
      this.apiOk = false;
    }

    try {
      let timer: any = null;
      this.main.nativeElement.addEventListener('scroll', ($event: Event) => {
        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          // do something
          const element = $event.target as any;

          this.ui.mainScrollPos.next({ y: element.scrollTop });
        }, 150);
      });
    } catch (error) {}
  }
}
