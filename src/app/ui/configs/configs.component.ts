import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/applications.service';
import { Component, Input } from '@angular/core';
import { IApplication } from 'src/app/models/application';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
})
export class ConfigsComponent {
  public showConfirmRemoval = false;
  public showSecret = false;
  public applicationSub$: Subscription | undefined;
  @Input('application') application: IApplication | null = null;

  public toggleSecret = (e: Event) => {
    e.preventDefault();
    this.showSecret = !this.showSecret;
  };

  public confirmRemoval = (e: Event) => {
    e.preventDefault();
    const application = this.applicationService.applicationBehavior$.value;
    if (application) {
      this.applicationSub$ = this.applicationService
        .deleteApplication(application.id)
        .subscribe((response) => {
          this.cancelRemoval();
          this.applicationSub$?.unsubscribe();
          this.applicationService.getApplications();
          this.router.navigateByUrl('/applications');
        });
    }
  };

  public cancelRemoval = () => {
    this.showConfirmRemoval = false;
  };

  public deleteApplication = () => {
    this.showConfirmRemoval = true;
  };

  constructor(
    public applicationService: ApplicationService,
    public router: Router
  ) {}
}
