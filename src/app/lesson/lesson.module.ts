import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { MaterialModule } from '../material/material.module';

import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { StepperComponent } from './stepper/stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { HtmlPipe } from './input/html.pipe';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [SidenavComponent, ToolbarComponent, ListComponent, MenuComponent,
    StepperComponent, InputComponent, HtmlPipe, DatepickerComponent, SelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LessonRoutingModule
  ]
})
export class LessonModule {
}
