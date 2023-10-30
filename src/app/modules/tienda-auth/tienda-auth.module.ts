import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaAuthRoutingModule } from './tienda-auth-routing.module';
import { TiendaAuthComponent } from './tienda-auth.component';
import { ListCartComponent } from './list-cart/list-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TiendaAuthComponent,
    ListCartComponent
  ],
  exports: [
    TiendaAuthComponent,
    ListCartComponent
  ],
  imports: [
    CommonModule,
    TiendaAuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class TiendaAuthModule { }
