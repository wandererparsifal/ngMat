import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gridlist',
  templateUrl: './gridlist.component.html',
  styleUrls: ['./gridlist.component.css']
})
export class GridlistComponent implements OnInit {

  gridGroup: FormGroup;

  cols: number;

  constructor() {
    this.gridGroup = new FormGroup({
      colsControl: new FormControl(3),
    });
    this.cols = this.gridGroup.get('colsControl').value;
    this.gridGroup.get('colsControl').valueChanges
      .subscribe(value => {
        this.cols = value;
      });
  }

  ngOnInit() {
  }

}
