import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  favoriteColor: FormGroup;

  selectedColorRed: number;
  selectedColorGreen: number;
  selectedColorBlue: number;

  constructor() {
    this.favoriteColor = new FormGroup({
      favoriteColorRed: new FormControl(128),
      favoriteColorGreen: new FormControl(128),
      favoriteColorBlue: new FormControl(128)
    });
    this.selectedColorRed = this.favoriteColor.get('favoriteColorRed').value;
    this.selectedColorGreen = this.favoriteColor.get('favoriteColorGreen').value;
    this.selectedColorBlue = this.favoriteColor.get('favoriteColorBlue').value;
    this.favoriteColor.get('favoriteColorRed').valueChanges
      .subscribe(value => {
        this.selectedColorRed = value;
      });
    this.favoriteColor.get('favoriteColorGreen').valueChanges
      .subscribe(value => {
        this.selectedColorGreen = value;
      });
    this.favoriteColor.get('favoriteColorBlue').valueChanges
      .subscribe(value => {
        this.selectedColorBlue = value;
      });
  }

  ngOnInit() {
  }

  selectedColorStyle() {
    const color = `rgb(${this.selectedColorRed}, ${this.selectedColorGreen}, ${this.selectedColorBlue})`;
    console.log('color ' + color);
    return color;
  }
}
