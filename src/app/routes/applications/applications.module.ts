import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ApplicationsRoutingModule, FormsModule],
  declarations: [ApplicationsComponent],
  exports: [ApplicationsComponent],
})
export class ApplicationsModule {}
