import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<app-car-setup-form></app-car-setup-form>`,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
