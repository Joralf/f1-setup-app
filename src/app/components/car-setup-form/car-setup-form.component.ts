import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-setup-form',
  templateUrl: './car-setup-form.component.html',
})
export class CarSetupFormComponent implements OnInit {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      aerodynamics: new FormGroup({
        frontWing: new FormControl(),
        rearWing: new FormControl(),
      }),
      transmission: new FormGroup({
        onThrottle: new FormControl(),
        offThrottle: new FormControl(),
      }),
      suspensionGeometry: new FormGroup({
        frontCamber: new FormControl(),
        rearCamber: new FormControl(),
        frontToe: new FormControl(),
        rearToe: new FormControl(),
      }),
      suspension: new FormGroup({
        frontSuspension: new FormControl(),
        rearSuspension: new FormControl(),
        frontAntiRollbar: new FormControl(),
        rearAntiRollbar: new FormControl(),
        frontRideHeight: new FormControl(),
        rearRideHeight: new FormControl(),
      }),
      brakes: new FormGroup({
        brakePressure: new FormControl(),
        frontBrakeBias: new FormControl(),
      }),
      tyres: new FormGroup({
        frontRightTyrePressure: new FormControl(),
        frontLeftTyrePressure: new FormControl(),
        rearRightTyrePressure: new FormControl(),
        rearLeftTyrePressure: new FormControl(),
      }),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.form);
  }
}
