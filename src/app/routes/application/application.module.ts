import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { ApiGuideModule } from 'src/app/ui/api-guide/api-guide.module';
import { ConfigsModule } from 'src/app/ui/configs/configs.module';
import { StateModule } from 'src/app/ui/state/state.module';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    ApiGuideModule,
    ConfigsModule,
    StateModule,
  ],
  declarations: [ApplicationComponent],
  exports: [ApplicationComponent],
})
export class ApplicationModule {}
