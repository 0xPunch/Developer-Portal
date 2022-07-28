import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencesComponent } from './preferences.component';
import { PreferencesRoutingModule } from './preferences-routing.module';

@NgModule({
  imports: [CommonModule, PreferencesRoutingModule],
  declarations: [PreferencesComponent],
})
export class PreferencesModule {}
