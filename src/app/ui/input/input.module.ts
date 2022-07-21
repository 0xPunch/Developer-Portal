import { InputComponent } from './input.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, InputComponent],
  declarations: [InputComponent],
  exports: [InputComponent],
})
export class InputModule {}
