import { ButtonModule } from './../button/button.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigsComponent } from './configs.component';
import { InputModule } from '../input/input.module';

@NgModule({
  imports: [CommonModule, FormsModule, InputModule, ButtonModule],
  exports: [ConfigsComponent],
  declarations: [ConfigsComponent],
})
export class ConfigsModule {}
