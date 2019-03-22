import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { MaterialModule } from '../material/material.module';

import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [SidenavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LessonRoutingModule
  ]
})
export class LessonModule { }
