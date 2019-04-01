import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map } from 'rxjs/operators';

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
    // this.countries$ = this.httpClient.get<Country[]>('assets/countries.json');
    this.countryControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe(inputCountry => {
        // console.log(inputCountry);
        this.countries$ = this.httpClient.get<any[]>('assets/countries.json')
          .pipe(map(countries => {
            return countries.filter(country => country.name.indexOf(inputCountry) >= 0);
          }));
      });
  }

  ngOnInit() {
  }

  displayCountry(country: any) {
    if (country) {
      return `${country.name} / ${country.code}`;
    } else {
      return '';
    }
  }

  highlightFiltered(countryName: string) {
    const inputCountry = this.countryControl.value;
    return countryName.replace(inputCountry, `<span class="autocomplete-highlight">${inputCountry}</span>`);
  }

}
