import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatAutocompleteModule,
  MatButtonModule, MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatSelectModule,
  MatSidenavModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

export const CN_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY MMM'
  }
};

@NgModule({
  declarations: [],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-CN' },
    { provide: MAT_DATE_FORMATS, useValue: CN_FORMATS }
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {
}
