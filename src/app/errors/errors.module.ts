import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './_components/main/main.component';
import { AccessComponent } from './_components/access/access.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'access', component: AccessComponent },
];

@NgModule({
  declarations: [MainComponent, AccessComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ErrorsModule { }
