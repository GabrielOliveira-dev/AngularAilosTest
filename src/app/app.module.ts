import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewEmployeeAcceptanceModule } from './modules/new-employee-acceptance/new-employee-acceptance.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    NewEmployeeAcceptanceModule,
    ToastrModule.forRoot({
      maxOpened: 3,
      timeOut: 1000
    }),
    NgxMaskModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
