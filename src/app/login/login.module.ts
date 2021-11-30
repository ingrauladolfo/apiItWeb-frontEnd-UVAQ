import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './_components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent}
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
