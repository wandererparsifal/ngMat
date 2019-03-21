import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    LessonRoutingModule
  ]
})
export class LessonModule { }
