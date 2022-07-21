import { Component, OnInit } from '@angular/core';
import { countries } from 'countries-list';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  public countries = countries;

  constructor() {}

  ngOnInit() {}
}
