import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  mainQuestions: FormGroup;

  indeterminateSelectedPayFor: boolean;

  constructor() {
    this.mainQuestions = new FormGroup({
      payForBook: new FormControl(false),
      payForMusic: new FormControl(false),
      payForMovie: new FormControl(true),
      payForAll: new FormControl(true),
      evaluate: new FormControl(3)
    });
    this.mainQuestions.get('evaluate').valueChanges
      .subscribe(value => {
        console.log('evaluate: ' + value);
      });
  }

  ngOnInit() {
    this._setSelectAllState();
  }

  checkAllChange($event: MatCheckboxChange) {
    this.mainQuestions
      .get('payForBook')
      .setValue($event.checked);
    this.mainQuestions
      .get('payForMusic')
      .setValue($event.checked);
    this.mainQuestions
      .get('payForMovie')
      .setValue($event.checked);
    this._setSelectAllState();
  }

  payForChange() {
    this._setSelectAllState();
  }

  private _setSelectAllState() {
    const payForBook = this.mainQuestions.get('payForBook').value;
    const payForMusic = this.mainQuestions.get('payForMusic').value;
    const payForMovie = this.mainQuestions.get('payForMovie').value;
    const count = (payForBook ? 1 : 0) + (payForMusic ? 1 : 0) + (payForMovie ? 1 : 0);
    this.mainQuestions.get('payForAll').setValue(count === 3);
    this.indeterminateSelectedPayFor = count > 0 && count < 3;
  }
}
