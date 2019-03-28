import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class EarlyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && control.dirty);
  }
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  surveyForm: FormGroup;

  earlyErrorStateMatcher = new EarlyErrorStateMatcher();

  constructor(fb: FormBuilder) {
    this.surveyForm = fb.group({
      intro: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
  }

}
