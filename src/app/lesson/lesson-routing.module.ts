import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { StepperComponent } from './stepper/stepper.component';
import { FormComponent } from '../form/form.component';
import { InputComponent } from './input/input.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SelectComponent } from './select/select.component';
import { SelectionComponent } from './selection/selection.component';
import { SliderComponent } from './slider/slider.component';
import { GridlistComponent } from './gridlist/gridlist.component';

const routes: Routes = [
  {
    path: 'list', component: ListComponent,
    children: [
      { path: 'sidenav', component: SidenavComponent },
      { path: 'toolbar', component: ToolbarComponent }
    ],
  },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'form', component: FormComponent },
  { path: 'input', component: InputComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'select', component: SelectComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'gridlist', component: GridlistComponent },
  { path: '', redirectTo: '/gridlist', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule {
}
