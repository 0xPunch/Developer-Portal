import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './state.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [StateComponent],
  exports: [StateComponent],
})
export class StateModule {}
