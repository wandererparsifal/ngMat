import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  mainQuestions: FormGroup;

  constructor() {
    this.mainQuestions = new FormGroup({
      payForBook: new FormControl(false),
      payForMusic: new FormControl(false),
      payForMovie: new FormControl(true),
    });
  }

  ngOnInit() {
  }

}
