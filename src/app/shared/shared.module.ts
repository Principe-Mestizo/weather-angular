import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFountComponent } from './components/not-fount/not-fount.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NotFountComponent,
    SearchboxComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NotFountComponent,
    SearchboxComponent,

  ]
})
export class SharedModule { }
