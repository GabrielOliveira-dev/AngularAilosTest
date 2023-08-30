import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewEmployeeAcceptanceRoutingModule } from './new-employee-acceptance-routing.module';
import { NewEmplAcceptanceComponent } from './components/new-empl-acceptance/new-empl-acceptance.component';
import { SharedModule } from '../shared/shared.module';
import { NewEmployeeInputComponent } from './components/new-empl-acceptance/new-empl-input/new-employee-input.component';
import { NewEmployeeCardsComponent } from './components/new-empl-acceptance/new-employee-cards/new-employee-cards.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { FooterComponent } from '../shared/components/molecules/footer/footer.component';


@NgModule({
  declarations: [
    NewEmplAcceptanceComponent,
    NewEmployeeInputComponent, 
    NewEmployeeCardsComponent,
    
  ],
  imports: [
    CommonModule, 
    NewEmployeeAcceptanceRoutingModule, 
    SharedModule, 
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxMaskModule.forChild()
  ],
})
export class NewEmployeeAcceptanceModule {}
