import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  isLinear: boolean;

  basicFormGroup: FormGroup;

  basicFormControl: FormControl;

  surveyForm: FormGroup;

  constructor() {
    this.basicFormGroup = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.basicFormControl = this.basicFormGroup.get('name') as FormControl;
    this.basicFormControl.valueChanges.subscribe(
      (value: string) => {
        console.log('name changed to:', value);
      }
    );

    this.surveyForm = new FormGroup({
      basicQuestions: new FormGroup({
        name2: new FormControl('', Validators.required)
      })
    });
  }

  ngOnInit() {
  }

}
