import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { MaterialModule } from '../material/material.module';

import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [SidenavComponent, ToolbarComponent, ListComponent, MenuComponent, StepperComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LessonRoutingModule
  ]
})
export class LessonModule { }
