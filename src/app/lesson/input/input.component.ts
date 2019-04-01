import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class EarlyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && control.dirty);
  }
}

class Country {
  name: string;
  code: string;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  surveyForm: FormGroup;

  earlyErrorStateMatcher = new EarlyErrorStateMatcher();

  autoForm: FormGroup;

  countryControl: FormControl;

  countries$: Observable<Country[]>;

  constructor(fb: FormBuilder, private httpClient: HttpClient) {
    this.surveyForm = fb.group({
      intro: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.autoForm = fb.group({
      country: ['', [Validators.required]]
    });
    this.countryControl = this.autoForm.get('country') as FormControl;
    this.countries$ = this.httpClient.get<Country[]>('assets/countries.json');
  }

  ngOnInit() {
  }

}
