import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEmplAcceptanceComponent } from './components/new-empl-acceptance/new-empl-acceptance.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: NewEmplAcceptanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class NewEmployeeAcceptanceRoutingModule {}
