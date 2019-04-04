import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent implements OnInit {

  nestInterestList: any[];

  constructor() {
  }

  ngOnInit() {
    this.nestInterestList = [
      { id: 0, name: 'aaa', subItems: [{ id: 0, name: 'aaa1' }, { id: 2, name: 'aaa2' }] },
      { id: 1, name: 'bbb', subItems: [{ id: 0, name: 'bbb1' }] },
      { id: 2, name: 'ccc', subItems: [{ id: 0, name: 'ccc1' }, { id: 2, name: 'ccc2' }] }];
  }
}
