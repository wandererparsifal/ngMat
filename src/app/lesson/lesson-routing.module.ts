import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { StepperComponent } from './stepper/stepper.component';

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
  { path: '', redirectTo: '/stepper', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule {
}
