import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/molecules/header/header.component';
import { MenuSideComponent } from './components/molecules/menu-side/menu-side.component';
import { MainTemplateComponent } from './components/organism/main-template/main-template.component';
import { SteperComponent } from './components/atoms/steper/steper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AvatarPhotoComponent } from './components/atoms/avatar-photo/avatar-photo.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from './components/atoms/card/card.component';
import { NgxMaskModule } from 'ngx-mask';
import { FooterComponent } from './components/molecules/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuSideComponent,
    MainTemplateComponent,
    SteperComponent,
    AvatarPhotoComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    NgxMaskModule.forChild()
  ],
  exports: [
    HeaderComponent,
    MenuSideComponent,
    MainTemplateComponent,
    SteperComponent,
    CardComponent,
    FooterComponent
  ],
})
export class SharedModule {}
