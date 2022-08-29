import { DemoService } from 'src/app/services/demo.service';
import { BehaviorSubject } from 'rxjs';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { IInput, InputType } from 'src/app/models/ui.input';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  // Inputs

  @Input('config') config: IInput;

  // Outputs
  @Output('valueChange') valueChange: EventEmitter<any> = new EventEmitter();
  @Output('valueInvalid') valueInvalid: EventEmitter<any> = new EventEmitter();
  @Output('valueValid') valueValid: EventEmitter<any> = new EventEmitter();

  // Consts
  public countries = this.demo.countries;
  public inputType = InputType;

  // value
  public value: any;
  public error$: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  /**
   * Validate input
   * Emits valid or invalid event.
   */
  private validateInput = async () => {
    // Clear errors before validation
    this.error$.next(null);

    // Check if input is required
    if (this.config.required && !this.value) {
      this.error$.next('requiredFieldError');
      return this.valueInvalid.emit(this.value);
    }
    // Check input type.
    const type: InputType = this.config.type;

    // Check type. And validate based on type.
    // Return and emit event.
    switch (type) {
      case InputType.phone:
        if (this.validator.phone(this.value)) {
          return this.valueValid.emit(this.value);
        }
        this.error$.next('phoneFormatError');
        return this.valueInvalid.emit(this.value);
      case InputType.email:
        if (this.validator.email(this.value)) {
          return this.valueValid.emit(this.value);
        }
        this.error$.next('emailFormatError');
        return this.valueInvalid.emit(this.value);
    }
  };

  /**
   * Change handler. This should be triggerd everytime an input changes.
   * Value should validate and then trigger event of invalid or valid.
   * Value should also be emitted.
   *
   * @param $event
   */
  public handleChange = async ($event: Event) => {
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }
    await this.validateInput();
    this.valueChange.emit(this.value);
  };

  /**
   * Initalize input.
   * Adding initValue
   */
  private initInput = async () => {
    if (this.config) {
      this.value = this.config.initValue;
    }
  };

  constructor(public validator: ValidatorsService, public demo: DemoService) {}

  ngOnInit() {
    this.initInput();
  }
}
