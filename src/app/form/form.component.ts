import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;

  inputSku: FormControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['ABC123', Validators.required]
    });
    this.inputSku = this.myForm.get('sku') as FormControl;
    this.inputSku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    );
    this.myForm.valueChanges.subscribe(
      (value: string) => {
        console.log('form changed to:', value);
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
