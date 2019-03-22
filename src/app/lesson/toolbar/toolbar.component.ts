import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  items: number[] = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 80; i++) {
      this.items.push(i);
    }
  }

}
