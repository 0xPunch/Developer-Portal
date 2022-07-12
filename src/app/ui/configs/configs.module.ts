import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigsComponent } from './configs.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [ConfigsComponent],
  declarations: [ConfigsComponent],
})
export class ConfigsModule {}
